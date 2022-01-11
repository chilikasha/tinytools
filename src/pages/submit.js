import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';

function Submit() {
  return (
    <Layout title="Submit">
      <header className={clsx(' hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={styles.pSubmitPage}>Know of a good app which matches <code>Tiny&nbsp;tools</code> ?<br/>
            Please submit it below.
          </p>
          <div>
            <form action="https://getform.io/f/2954a616-d43c-4d08-8481-8f2fc20c50df" method="POST">
              <input className={styles.input} type="text" placeholder="App name" name="app_name" required/><br/>
              <input className={styles.input} type="text" placeholder="Any comment (optional)" name="message"/>
              <div className={styles.buttons}>
                <button style={{"width": "200px", "margin-top": "10px"}} className="button button--primary button--lg" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Submit;