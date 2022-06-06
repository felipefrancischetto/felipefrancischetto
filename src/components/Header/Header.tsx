import React from "react";

import styles from './Header.module.css'

type HeaderProps = {
  tabs: Tab[], 
}

type Tab = {
  label: string,
  onClick: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
  const { tabs } = props
  
  return (
    <div className={styles.header}>
      <section className={styles.main}>
        <button type="button" className={styles.tabStart} onClick={() => console.log('goto home')}>
          felipe-francischetto
        </button> 

        <div className={styles.tabs}>
          {tabs.map((tab: Tab, index) => {
            return (
              <button type="button" className={styles.tab} onClick={tab.onClick} key={index}>
                {tab.label}
              </button>  
            )
          })}
        </div>
      </section>

      <button type="button" className={styles.tabEnd} onClick={() => console.log("goto contact")}>
        _contact-me
      </button>     
    </div>
  );
};

export default Header;
