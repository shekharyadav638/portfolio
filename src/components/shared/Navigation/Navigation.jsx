import React from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navhead}>
          <div className={styles.leftNav}>
            <div className={styles.logoDiv}>
              <img src="/img/logo.png" alt="logo" />
            </div>
          </div>
          <div className={styles.rightNav}>
            <div className={styles.navLinkDiv}>
              <ul className={styles.navLinks}>
                <li className={styles.linkItem}>ABOUT</li>
                <li className={styles.linkItem}>MY SKILLS</li>
                <li className={styles.linkItem}>PROJECTS</li>
                <li className={styles.linkItem}>SERVICES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;