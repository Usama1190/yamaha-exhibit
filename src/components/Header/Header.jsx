import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.hw}>
      <div className={styles.hlw}>
        <a href='/' className={styles.hl}><img src={'/images/yamahlogo.png'} alt="logo" /></a>
        <p>passion ahead</p>
      </div>

      <ul className={styles.nrl}>
        <li><a href={'/'}>Home</a></li>
        <li><a href={'/'}>Products</a></li>
        <li><a href={'/'}>About</a></li>
        <li><a href={'/'}>Contact us</a></li>
      </ul>
    </div>
  )
}

export default Header;
