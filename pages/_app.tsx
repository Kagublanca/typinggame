import { AppProps } from 'next/app'
import '../styles/global.style.ts'
import { GlobalStyle } from "../styles/global.style";

function MyApp({ Component, pageProps } : AppProps) {
  return (
  <>
   <GlobalStyle />
  <Component {...pageProps} />
  </>)}

export default MyApp
