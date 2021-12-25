import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';

function About() {
  return (
    <Layout title="About">
      <header className={clsx(' hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={styles.pAboutPage}>Welcome to <code>Tiny tools</code>, a collection of fast, minimalist, single-purpose apps and tools which are designed to be lightweight, simple but still incredibly useful to solve everyday problems and tasks. An app will likely be listed here if it's:
          <br/>
          - native, fast and lightweight
          <br/>
          - single-purpose
          <br/>
          - open source
          <br/>
          - live (actively maintained)
          <br/>
          - used (or would be used) by myself
          </p>
        <br/> 
        <p className={styles.pAboutPage}>Please use sidebar for site navigation. In case of problems, suggestions or questions please <a href="https://github.com/chilikasha/tinytools/issues">open an issue</a> or <a href="https://github.com/chilikasha/tinytools/discussions">start a discussion</a>.
        </p>
        </div>
      </header>
    </Layout>
  );
}

export default About;