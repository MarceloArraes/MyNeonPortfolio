import React, { Dispatch, createContext, useEffect, useState } from 'react'

export const AudioContext = createContext<{
  audioElement: HTMLAudioElement | null
  setAudioElement: Dispatch<HTMLAudioElement | null>
  audioContext: AudioContext | null
  setAudioContext: Dispatch<AudioContext | null>
  analyser: AnalyserNode | null
  setAnalyser: Dispatch<AnalyserNode | null>
  isLoading: boolean
  handlePlay: () => void
}>({
  audioElement: null,
  setAudioElement: () => {},
  audioContext: null,
  setAudioContext: () => {},
  analyser: null,
  setAnalyser: () => {},
  isLoading: true,
  handlePlay: () => {},
})

interface AudioContextProviderProps {
  children: React.ReactNode
}

export const AudioContextProvider = ({
  children,
}: AudioContextProviderProps) => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  )
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handlePlay = () => {
    if (audioContext?.state === 'suspended') {
      audioContext.resume()
    }
    audioElement?.play()
  }
  useEffect(() => {
    const audio = new Audio('/NightDriveSynthwaveMusic.mp3')
    setAudioElement(audio)

    if (!audioContext) {
      const audioCtx = new (window.AudioContext ||
        (window as any).webkitAudioContext)()
      setAudioContext(audioCtx)
      // const analyserNode = audioCtx.createAnalyser()
      // analyserNode.fftSize = 256
      // const source = audioCtx.createMediaElementSource(audio)
      // source.connect(analyserNode)
      // analyserNode.connect(audioCtx.destination)
      // setAnalyser(analyserNode)
      setIsLoading(false)
    }
  }, [audioContext])

  audioElement?.addEventListener('error', (e) => {
    console.error('Audio Error:', e)
  })

  audioElement?.addEventListener('play', () => {
    console.log('Audio started playing')
  })

  audioElement?.addEventListener('pause', () => {
    console.log('Audio paused')
  })

  return (
    <AudioContext.Provider
      value={{
        audioElement,
        setAudioElement,
        audioContext,
        setAudioContext,
        analyser,
        setAnalyser,
        isLoading,
        handlePlay,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}
