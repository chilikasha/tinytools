import 'nextra-theme-docs/style.css'
import '../public/style.css'
import Script from "next/script"
import { usePanelbear } from '@panelbear/panelbear-nextjs'

export default function Nextra({ Component, pageProps }) {
  usePanelbear('JHnEG7vc0FG', {
    debug: false
  })
  return (<Component {...pageProps} />)
}