import 'nextra-theme-docs/style.css'
import '../public/style.css'
import { usePanelbear } from '@panelbear/panelbear-nextjs'

export default function Nextra({ Component, pageProps }) {
  usePanelbear('JHnEG7vc0FG', {
    debug: false
  })
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}