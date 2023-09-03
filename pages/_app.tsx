import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { GlobalStyle, ThemeProvider } from '@react95/core'
import { ThemeToggle } from '../components/ThemeToggle'
import { WebampButton } from '../components/WebampPlayer'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import { AudioContextProvider } from '../providers/AudioContextProvider'

export const MusicContext = createContext<{
  audioElement: HTMLAudioElement | null
}>({
  audioElement: null,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider attribute="class">
      {/* <MusicContext.Provider value={{ audioElement }}> */}
      <AudioContextProvider>
        <ThemeProvider>
          <GlobalStyle />

          <ThemeToggle />
          <WebampButton />
          {/* <WebampPlayer /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </AudioContextProvider>
      {/* </MusicContext.Provider> */}
    </NextThemeProvider>
  )
}

export default MyApp
