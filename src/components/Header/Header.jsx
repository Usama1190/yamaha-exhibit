import { navData } from "../../utils/constant/navData";
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
          <ul>
            {
              navData.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
