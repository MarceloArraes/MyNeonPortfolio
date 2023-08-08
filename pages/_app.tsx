import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { GlobalStyle, ThemeProvider } from '@react95/core'
import { ThemeToggle } from '../components/ThemeToggle'
import { WebampButton } from '../components/WebampPlayer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider attribute="class">
      <ThemeProvider>
        <GlobalStyle />

        <ThemeToggle />
        <WebampButton />
        {/* <WebampPlayer /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </NextThemeProvider>
  )
}

export default MyApp
