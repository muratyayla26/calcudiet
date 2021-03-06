import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./_footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.phone}>
        <div className={styles["names-footer-container"]}>
          <div className={styles["double-name-container"]}>
            <div className={styles["single-name-container"]}>
              <p>Ahmet Seha Açar</p>
              <a
                rel="noreferrer"
                href="https://github.com/ahmetseha"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </div>
            <div className={styles["single-name-container"]}>
              <a
                rel="noreferrer"
                href="https://github.com/fyilmazy"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
              <p>Fahrettin Yılmaz</p>
            </div>
          </div>
        </div>
        <div className={styles["names-footer-container"]}>
          <div className={styles["double-name-container"]}>
            <div className={styles["single-name-container"]}>
              <p>Hasan Elmacı</p>
              <a
                rel="noreferrer"
                href="https://github.com/hasanelmaci"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </div>
            <div className={styles["single-name-container"]}>
              <a
                rel="noreferrer"
                href="https://github.com/muratyayla26"
                target="_blank"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
              <p>Murat Yayla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
