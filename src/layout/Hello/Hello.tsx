import React from "react";

import styles from './Hello.module.css'

const Hello: React.FC = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Felipe Francischetto</h1>
        <h3 className={styles.subtitle}>{'> Front End Developer'}</h3>

        <div className="discription">
          <p className={styles.commentLine}>{'// complete the game to continue'}</p>
          <p className={styles.commentLine}>{'// you can also see it on my Github page'}</p>
          <p className={styles.commentLine}>
            <span className="secondary-color three">const </span>
            <span className="accent-color two">githubLink </span>
            <span className="white">= </span>
            <span className="accent-color three">{'"https://github.com/example/url"'}</span>
          </p>
        </div>
      </div>

      <div className={styles.background}></div>
    </div>
  ); 
}

export default Hello;
