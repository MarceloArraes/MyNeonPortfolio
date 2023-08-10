'use client'
import React, { useEffect, useState } from 'react'
import { Modal, Frame, List, Button, Avatar } from '@react95/core'
import Typewriter from 'typewriter-effect'

const TypeWritterTitle = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Typewriter
        options={{
          strings: ['NeonCoder', 'Marcelo`s'],
          autoStart: true,
          deleteSpeed: 250,
          loop: true,
        }}
      />
    </div>
  )
}
const TypeWritterInvite = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Typewriter
        // options={{
        //   strings: ['You wish to get the full experience?'],
        //   autoStart: true,
        //   // loop: true,
        // }}
        onInit={(typewriter) => {
          typewriter.typeString('Ready??').changeDelay(100).start()
        }}
      />
    </div>
  )
}

export function Tunes() {
  const [showTunes, toggleTunes] = useState(true)
  const [loading, setLoading] = useState(true)
  const handleCloseTunes = () => {
    toggleTunes(false)
  }
  useEffect(() => {
    setLoading(true)
  }, [])
  if (!loading) return null
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
          <TypeWritterTitle />
          <div className="my-4 flex flex-1 items-center justify-center">
            <Avatar
              alt="photo"
              src="./myPics/marceloSythLord1-removebg-preview.png"
              size={150}
            />
          </div>
          <TypeWritterInvite />
          <div className="flex flex-1 flex-row">
            <Button
              style={{ width: '50%' }}
              onClick={() => {
                alert('Yes baby'), toggleTunes(false)
              }}
            >
              Yes
            </Button>
            <Button
              style={{ width: '50%' }}
              onClick={() => {
                alert('No man'), toggleTunes(false)
              }}
            >
              No
            </Button>
          </div>
          {/* <Butto
          {/* //   <Frame
        //     className="rounded"
        //     style={{
        //       height: '150px',
        //       borderRadius: '1rem',
        //       overflowY: 'hidden',
        //     }}
        //   > */}
          {/* </Frame> */}
        </Modal>
      ) : null}
    </>
  )
}

{
  /* <iframe
              src="https://open.spotify.com/embed/playlist/42lX7a4yx3rJJcDSimyS9S?utm_source=generator&theme=0"
              width="100%"
              height="165px"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="The Ultimate Lo-Fi House Playlist on Spotify"
            /> */
}
