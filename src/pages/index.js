import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(' hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={"hero__title", styles.gradient_text}>{siteConfig.title}</h1>
        <h2 style={{"fontSize": "1.5rem"}}>Collection of fast, minimalist,
        single purpose apps</h2>
        <ul className={styles.main_ul} type="none">
          <li>For everyday problems and tasks</li>
          <li>Simple and lightweight</li>
          <li>Do their job perfectly</li>
        </ul>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/audio">
            Browse collection
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={siteConfig.title}
      description="Collection of useful, simple, single purpose apps and tools for everyday problems and tasks">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
