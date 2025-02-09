import { navLinks } from "../../utils/constant/navbar";
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

        <ul className={styles.nrl}>
          {
            navLinks.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
