import React, { useEffect, useRef } from 'react'

const WebampPlayer = () => {
  const webampContainerRef = useRef(null)

  useEffect(() => {
    // Load Webamp dynamically on the client-side.
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
            url: 'NightDriveSynthwaveMusic.mp3',
          },
        ],
        zIndex: 99999,
        initialSkin: {
          url: './Vaporwave.wsz',
        },
      })
      // Render after the skin has loaded.
      webamp.renderWhenReady(webampContainerRef.current!)
    })
  }, [])

  return <div className="" id="winamp-container" ref={webampContainerRef}></div>
}

export default WebampPlayer
