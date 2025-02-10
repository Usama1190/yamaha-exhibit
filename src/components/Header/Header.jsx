import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.hdw}>
      <div className={styles.hdiw}>
        <div className={styles.hdlw}>
          <a href="/" className={styles.hdl}>
            <img src={"/images/yamahlogo.png"} alt="logo" />
          </a>
          <p>passion ahead</p>
        </div>

        <div>
          <h5>Showcase</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
