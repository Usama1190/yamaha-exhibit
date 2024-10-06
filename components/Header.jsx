import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_wrapper}>
        <a href='/' className={styles.logo}><img src={'/images/yamahlogo.png'} alt="logo" /></a>
        <p>passion ahead</p>
      </div>

      <ul className={styles.nav_right_links}>
        <li><a href={'/'} className={styles.anchors}>Home</a></li>
        <li><a href={'/'} className={styles.anchors}>Products</a></li>
        <li><a href={'/'} className={styles.anchors}>About</a></li>
        <li><a href={'/'} className={styles.anchors}>Contact us</a></li>
      </ul>
    </div>
  )
}

export default Header;
