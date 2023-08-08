import { Video, ThemeProvider, GlobalStyle } from '@react95/core'
import { useEffect, useState } from 'react'

export const VideoRetro = () => {
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const loadVideo = () => {
      setVideoReady(true)
    }
    loadVideo()
  }, [])

  return (
    <>
      {videoReady ? (
        <Video
          name="Video"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          style={{
            marginBottom: 4,
          }}
        />
      ) : (
        <div>Loading video...</div>
      )}
    </>
  )
}
