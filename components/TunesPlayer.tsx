import React, { useEffect, useState } from 'react'
import { Modal, Frame, List } from '@react95/core'
import { CdMusic } from '@react95/icons'

function autoplay() {
  var t = setTimeout(function () {
    var button = document.querySelector(
      '[title="Play"]'
    ) as HTMLButtonElement | null
    if (button) {
      console.log('Click', button)
      button.click()
    }
  }, 999)
}

export function Tunes() {
  const [showTunes, toggleTunes] = useState(true)
  const handleCloseTunes = () => {
    toggleTunes(false)
  }
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', (event) => {
      autoplay()
    })
  }, [])

  return (
    <>
      {showTunes ? (
        <Modal
          style={{
            right: 20,
            marginTop: 35,
            width: '30%',
            overflowY: 'hidden',
            zIndex: 99,
          }}
          title={'Tunes'}
          closeModal={handleCloseTunes}
          icon={<CdMusic variant="32x32_4" />}
          menu={[
            {
              name: 'Options',
              list: (
                <List>
                  <List.Item onClick={handleCloseTunes}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            className="rounded"
            style={{
              height: '150px',
              borderRadius: '1rem',
              overflowY: 'hidden',
            }}
          >
            <iframe
              src="https://open.spotify.com/embed/playlist/42lX7a4yx3rJJcDSimyS9S?utm_source=generator&theme=0"
              width="100%"
              height="165px"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="The Ultimate Lo-Fi House Playlist on Spotify"
            />
          </Frame>
        </Modal>
      ) : null}
      <button title="Play" />
    </>
  )
}
