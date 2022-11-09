import 'nextra-theme-docs/style.css'
import '../public/style.css'
import 'remixicon/fonts/remixicon.css'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;