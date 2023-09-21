'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Modal, Frame, List, Button, Avatar } from '@react95/core'
import Typewriter from 'typewriter-effect'
import { AudioContext } from '../providers/AudioContextProvider'
import { getAudioContext } from '../lib/getAudioContext'

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
  const {
    audioElement,
    audioContext,
    setAudioContext,
    analyser,
    isLoading,
    handlePlay,
  } = useContext(AudioContext)
  const handleCloseTunes = () => {
    toggleTunes(false)
  }

  if (isLoading) return null
  return (
    <>
      {showTunes ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <Modal
            style={{
              top: '30%',
              left: '45%',
              minWidth: 200,
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
                  handleCloseTunes()
                  handlePlay()
                }}
              >
                Yes
              </Button>
              <Button
                style={{ width: '50%' }}
                onClick={() => alert('Thats imorality, ')}
              >
                No
              </Button>
            </div>
          </Modal>
        </div>
      ) : null}
    </>
  )
}
