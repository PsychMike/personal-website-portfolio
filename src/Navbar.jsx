import React from "react";
import styles from "./NavBar.module.css"; // Import the CSS module

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img
          src="https://i.ibb.co/XDPsKRN/your-image-file.jpg"
          alt="My Logo"
          className={styles.logo}
        />
      </div>
      <ul className={styles.navbarButtons}>
        <li>
          <a href="https://github.com/PsychMike/">
            <img
              src="https://pngimg.com/uploads/github/github_PNG40.png"
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/michael-hess-2b898419a/">
            <img
              src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG29.png"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/freelancers/~01325ed6fe68935e31">
            <img
              src="https://iconape.com/wp-content/files/pj/112108/png/upwork-1.png"
              alt="UpWork"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
