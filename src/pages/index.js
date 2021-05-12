import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import splitbee from '@splitbee/web'

splitbee.init()

const features = [
  {
    title: 'qView',
    imageUrl: 'qview.webp',
    description: (
      <>
        Fast <a href="/docs/images/qview">image viewer</a>.
      </>
    ),
  },
  {
    title: 'Marta',
    imageUrl: 'marta.webp',
    description: (
      <>
        Native dual-pane macOS <a href="/docs/files/marta">file manager</a>.
      </>
    ),
  },
  {
    title: 'Tiny Player',
    imageUrl: 'tinyplayer.webp',
    description: (
      <>
        Music <a href="/docs/music/tiny-player">player</a> for Apple ecosystem.
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      {/*<h3>{title}</h3>*/}
      <p>{description}</p>
    </div>
  )
}

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title="Fast minimalist single-purpose apps"
      description="Collection of useful and simple apps for everyday problems and tasks."
    >
      <head>
        <meta
          name="ahrefs-site-verification"
          content="e84720fd3dd7d0e2d439a09168118c870f2382eb512d13636e43d3af505252f5"
        />
      </head>
      <header className={clsx('hero--primary', styles.heroBanner)}>
        {/* <header className={clsx('hero hero--primary', styles.heroBanner)}> */}
        {/* <img src="img/minimize_light.svg" alt=""></img>*/}
        {/*<svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-minimize"
        >
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
          <style> @media (prefers-color-scheme: dark)</style>
        </svg>*/}
        {/*<div className={clsx(styles.container)}>*/}
        <section className={styles.table}>
          <div style={{ height: '70%' }}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
            <p className="hero__subtitle">
              Fast • beautiful • minimalist • single-purpose
            </p>
            <div>
              <Link
                className={clsx('button button--primary button--lg')}
                to={useBaseUrl('docs/')}
              >
                Browse tools
              </Link>
            </div>
          </div>
        </section>
      </header>
      <main>
        <div className="hero__subtitle" style={{}}>
          <p className={styles.desc}>
            {' '}
            Collection of apps that serve one purpose and do it well. No feature
            bloat, no extra fluff or complexity, designed and built to do
            specific tasks fast and with style. Small in size but big in
            usefulness, these apps are about making life a little easier and
            providing a beautiful and simple solution to everyday problems and
            tasks.
          </p>
        </div>
        <div id="revue-embed" style={{ textAlign: 'center' }}>
          <form
            action="https://www.getrevue.co/profile/tinytools/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <label htmlFor="member_email" className={styles.label}>
              Get notified about site updates{' '}
            </label>
            <div className="revue-form-group" style={{ padding: '10px' }}>
              <input
                className="revue-form-field"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
                className={styles.input}
              />
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
                className={clsx('button button--secondary button--lg')}
              />
            </div>
            {/*<div className="revue-form-group">
              <label htmlFor="member_first_name">
                First name <span className="optional">(Optional)</span>
              </label>
              <input
                className="revue-form-field"
                placeholder="First name... (Optional)"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
            </div>*/}
            {/*<div
              className="revue-form-actions"
              className={clsx('button button--primary button--lg')}
            >
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>*/}
            {/*<div className="revue-form-footer">
              By subscribing, you agree with Revue’s{' '}
              <a target="_blank" href="https://www.getrevue.co/terms">
                Terms
              </a>{' '}
              and{' '}
              <a target="_blank" href="https://www.getrevue.co/privacy">
                Privacy Policy
              </a>
              .
            </div>*/}
          </form>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
