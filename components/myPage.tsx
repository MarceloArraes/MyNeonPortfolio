import React from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import BackgroundAnimation from '../components/audioAnimationBack'

const DynamicBackgroundAnimation = dynamic(
  () => import('../components/audioAnimationBack'),
  {
    ssr: false, // Ensure it's not loaded during server-side rendering
  }
)

const YourPage = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <BackgroundAnimation />
      {/* Your other content here */}
      {typeof window !== 'undefined' && <DynamicBackgroundAnimation />}
    </Canvas>
  )
}

export default YourPage
