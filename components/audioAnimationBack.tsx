import { useEffect, useRef } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import audioContext from '../lib/audioContext' // Import the audioContext

const BackgroundAnimation = () => {
  const meshRef = useRef()
  const analyserRef = useRef(null) // Declare a ref for the analyser

  useEffect(() => {
    const audioElement = new Audio('/NightDriveSynthwaveMusic.mp3')
    audioElement.crossOrigin = 'anonymous'

    const analyser = audioContext.createAnalyser()
    analyser.fftSize = 256
    analyserRef.current = analyser
    const source = audioContext.createMediaElementSource(audioElement)
    source.connect(analyser)
    analyser.connect(audioContext.destination)
    audioElement.play().catch(console.error)

    return () => {
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }, [])

  useFrame(() => {
    const mesh = meshRef.current
    const analyser = analyserRef.current // Get the analyser from the ref
    if (!analyser) return // Ensure the analyser is available
    const dataArray = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(dataArray)
    const average =
      dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length
    mesh.scale.y = 1 + average / 1000
    mesh.rotation.x += 0.002
    mesh.rotation.y += 0.003
  })

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

export default BackgroundAnimation
