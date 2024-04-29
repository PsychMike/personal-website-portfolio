import React from "react";
import styles from "./ProjectsPage.module.css"; // Import the CSS module here

const ProjectsPage = () => {
  return (
    <div className={styles.projectsContainer}>
      {/* <h1 className={styles.projectsTitle}>My Projects</h1> */}
      <ul className={styles.projectsList}>
        <li className={styles.projectItem}>
          <a
            href="dog_site.html"
            target="TinDog"
            className={`${styles.projectLink} ${styles.tindogButton}`}
          >
            <img
              src="https://i.postimg.cc/QxhNRzXk/iphone.png"
              alt="TinDog Logo"
            />
            <span>TinDog</span>
          </a>
        </li>
        <li className={styles.projectItem}>
          <a
            href="simon_game.html"
            target="Simon"
            className={`${styles.projectLink} ${styles.simonButton}`}
          >
            <img
              src="https://th.bing.com/th/id/R.3ecf805caa90fb815bb175a323d5d453?rik=60CWoS5S3Bk2nQ&riu=http%3a%2f%2fwww.geekalerts.com%2fu%2fClassic-Simon-Game.jpg&ehk=%2fafSJHZ8jpxZ74YrFt%2bO%2fmSxJ1Cs3VlUkCr0Ot3RRcA%3d&risl=&pid=ImgRaw&r=0"
              alt="Simon Game Logo"
            />
            <span>Simon</span>
          </a>
        </li>
        <li className={styles.projectItem}>
          <a
            href="components\KeeperApp\KeeperApp.html"
            target="Keeper"
            className={`${styles.projectLink} ${styles.tindogButton}`}
          >
            <img
              src="https://th.bing.com/th/id/OIP.QXimkALNBis5ZT2bMIL-IwHaJC?rs=1&pid=ImgDetMain"
              alt="KeeperApp Logo"
            />
            <span>Keeper</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;
