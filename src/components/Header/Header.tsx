import React from "react";
import Link from "next/link";

import styles from './Header.module.css'
import { useRouter } from "next/router";

type HeaderProps = {
  tabs: Tab[], 
}

type Tab = {
  label: string,
  route: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const { tabs } = props
  const { asPath } = useRouter();
  const isActive = (route: string) => route === asPath ? styles.tabActive : '';

  
  return (
    <div className={styles.header}>
      <section className={styles.main}>
        <Link className={styles.wrapperTab} href="/" passHref>
          <a className={styles.tabStart}>
            felipe-francischetto
          </a>
        </Link>

        <div className={styles.tabs}>
          {tabs.map((tab: Tab, index: number) => {
            const tabActive = isActive(tab.route);
            return (
              <Link className={styles.wrapperTab} key={index} href={tab.route} passHref>
                <a className={`${styles.tab}  ${tabActive}`}>
                  {tab.label}
                </a>
              </Link>
            )
          })}
        </div>
      </section>

      <Link className={styles.wrapperTab} href="/contact-me" passHref>
        <a className={`${styles.tabEnd} ${isActive('/contact-me')}`}>
          _contact-me
        </a>
      </Link>
    </div>
  );
};

export default Header;
