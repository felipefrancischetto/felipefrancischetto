import React from "react";

import styles from './Footer.module.css'

type FooterProps = {
  tabs: Tab[], 
}

type Tab = {
  label: string,
  icon?: any,
  onClick: () => void
}

const Footer: React.FC<FooterProps> = (props) => {
  const { tabs } = props
  
  return (
    <footer className={styles.footer}>
      <section className={styles.main}>
        <span className={styles.tabStart}>
          find me in: 
        </span> 

        <div className={styles.tabs}>
          {tabs.map((tab: Tab, index) => {
            return (
              <button type="button" className={styles.tab} onClick={tab.onClick} key={index}>
                {tab.icon}
              </button>  
            )
          })}
        </div>
      </section>

      <button type="button" className={styles.tabEnd} onClick={() => console.log("goto contact")}>
        @felipefrancischetto
        <i className="ri-github-fill"></i>
      </button>     
    </footer>
  );
};

export default Footer;
