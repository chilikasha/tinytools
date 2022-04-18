import 'nextra-theme-docs/style.css'
import '../public/style.css'
import Script from "next/script"

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <script data-no-cookie async src="https://cdn.splitbee.io/sb.js" />
      <Component {...pageProps} />
    </>
  )
}