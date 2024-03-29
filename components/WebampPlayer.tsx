import { Button } from '@react95/core'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Headphones } from 'react-feather'
import { AudioContext } from '../providers/AudioContextProvider'

interface WebampPlayerProps {
  openedWebamp: boolean
  setOpenedWebamp: (openedWebamp: boolean) => void
}

const WebampPlayer: React.FC<WebampPlayerProps> = ({
  openedWebamp = false,
  setOpenedWebamp,
}) => {
  if (!openedWebamp) return null
  const { audioElement, audioContext, setAudioContext, analyser, setAnalyser } =
    useContext(AudioContext)

  const webampContainerRef = useRef(null)

  useEffect(() => {
    // Load Webamp dynamically on the client-side..
    console.log('audioElement', audioElement?.src)

    import('webamp').then(({ default: Webamp }) => {
      if (!Webamp.browserIsSupported()) {
        alert('Oh no! Webamp does not work!')
        throw new Error("What's the point of anything?")
      }

      const webamp = new Webamp({
        initialTracks: [
          {
            metaData: {
              artist: 'Euphoric Eugene',
              title: '~ N I G H T D R I V E ~ ',
            },
            url: audioElement?.src ?? '/NightDriveSynthwaveMusic.mp3',
          },
        ],
        zIndex: 99999,

        initialSkin: {
          url: './Vaporwave.wsz',
        },
      })
      // Render after the skin has loaded.
      webamp.renderWhenReady(webampContainerRef.current!)
      webamp.onClose(() => {
        setOpenedWebamp(false)
      })
      // webamp.play()
    })
  })

  useEffect(() => {
    // create the analizer in here?
    if (!audioContext) {
      const audioCtx = new (window.AudioContext ||
        (window as any).webkitAudioContext)()
      setAudioContext(audioCtx)
      const analyserNode = audioCtx.createAnalyser()
      analyserNode.fftSize = 256
      setAnalyser(analyserNode)
      if (audioElement) {
        const source = audioCtx.createMediaElementSource(audioElement)
        source.connect(analyserNode)
        analyserNode.connect(audioCtx.destination)
      }
    }
  }, [openedWebamp])

  return <div id="winamp-container" ref={webampContainerRef}></div>
}

export const WebampButton = () => {
  const [openedWebamp, setOpenedWebamp] = useState(false)

  return (
    <Button
      className="absolute left-6 top-80 z-40 m-5 items-center"
      onClick={() => setOpenedWebamp(!openedWebamp)}
    >
      <Headphones size={100} />
      <WebampPlayer
        openedWebamp={openedWebamp}
        setOpenedWebamp={setOpenedWebamp}
      />
    </Button>
  )
}
