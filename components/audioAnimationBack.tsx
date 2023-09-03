import { useContext, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Audio, Mesh } from 'three'
import { AudioContext } from '../providers/AudioContextProvider'

const BackgroundAnimation = () => {
  const meshRef = useRef<Mesh>()
  const analyserRef = useRef<AnalyserNode | null>(null) // Declare a ref for the analyser
  const [audioReady, setAudioReady] = useState(false)
  const { audioElement, audioContext } = useContext(AudioContext)
  console.log('audioContext.state ', audioContext?.state)

  useEffect(() => {
    if (!audioContext || !audioElement) return

    const setupAnalyser = () => {
      const analyserNode = audioContext.createAnalyser()
      analyserNode.fftSize = 256
      const existingSourceNode = audioElement.getAttribute(
        'data-source-node-connected'
      )
      if (!existingSourceNode) {
        const source = audioContext.createMediaElementSource(audioElement)
        source.connect(analyserNode)
        audioElement.setAttribute('data-source-node-connected', 'true')
      }
      analyserNode.connect(audioContext.destination)
      analyserRef.current = analyserNode

      setAudioReady(true)
    }

    if (!audioElement.paused) {
      setupAnalyser()
    } else {
      const onAudioPlay = () => {
        setupAnalyser()
        audioElement.removeEventListener('play', onAudioPlay)
      }
      audioElement.addEventListener('play', onAudioPlay)
    }

    return () => {
      audioElement.removeEventListener('play', setupAnalyser)
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }, [audioContext, audioElement])

  useFrame(() => {
    const analyser = analyserRef.current // Get the analyser from the ref

    if (!meshRef.current || !analyser || !audioReady) return // Ensure the analyser is available
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    analyser.getByteFrequencyData(dataArray)
    const average =
      dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length
    console.log('average', average)

    meshRef.current.rotation.x += 0.002
    meshRef.current.rotation.y += 0.003
    meshRef.current.scale.set(1, 1 + average / 1000, 1)
    // Vary the color based on the audio frequency average
    const colorIntensity = Math.min(average / 256, 1)
    ;(meshRef.current.material as any).color.setRGB(
      colorIntensity,
      1 - colorIntensity,
      colorIntensity
    )
  })

  return (
    <mesh ref={meshRef as React.Ref<Mesh>} scale={[1, 1, 1]}>
      <boxGeometry args={[2, 2, 2]} />
      {/* <meshStandardMaterial color="blue" /> */}
    </mesh>
  )
}

export default BackgroundAnimation
