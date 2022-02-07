import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

function Submit() {
  return (
    <Layout title="Submit">
      <Head>
        <meta name="description" content="Collection of useful, simple, single-purpose apps and tools for everyday problems and tasks" />
      </Head>
      <header className={clsx(' hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={styles.pSubmitPage}>Know of a good app which matches <code>Tiny&nbsp;tools</code> ?<br/>
            Please submit it below.
          </p>
          <div>
            <form action="https://getform.io/f/2954a616-d43c-4d08-8481-8f2fc20c50df" method="POST">
              <input className={styles.input} type="text" placeholder="App name or link" name="app_name" required/><br/>
              <input className={styles.input} type="text" placeholder="Comments (optional)" name="message"/>
              <div className={styles.buttons}>
                <button style={{"width": "200px", "marginTop": "10px"}} className="button button--primary button--lg" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </Layout>
  );
}

function getACount() {
    var a = document.getElementsByTagName('a').length
    return a
}

export default Submit;