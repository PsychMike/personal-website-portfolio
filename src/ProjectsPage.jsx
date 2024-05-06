// Importing React and CSS module
import React from "react";
import styles from "/public/styles/styles_projects.module.css"; // Ensure the path is correct and it's named correctly in your project

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        My
        <div className={styles.stack}>
          <span style={{ "--index": 0 }}>PROJECTS</span>
          <span style={{ "--index": 1 }}>PROJECTS</span>
          <span style={{ "--index": 2 }}>PROJECTS</span>
        </div>
      </div>
      <ul>
        <li>
          <a
            href="dog_site.html"
            target="_blank"
            className={`${styles.projectButton} ${styles.tindogButton}`} // Use general and specific classes
          >
            <img
              src="https://i.postimg.cc/QxhNRzXk/iphone.png"
              alt="TinDog Logo"
            />
            <span className={styles.buttonTitle}>TinDog</span>
            <span className={styles.descriptionText}>
              Discover new doggy friends!
            </span>
          </a>
        </li>
        <li>
          <a
            href="simon_game.html"
            target="_blank"
            className={`${styles.projectButton} ${styles.simonButton}`} // Use general and specific classes
          >
            <img
              src="https://th.bing.com/th/id/R.3ecf805caa90fb815bb175a323d5d453?rik=60CWoS5S3Bk2nQ&riu=http%3a%2f%2fwww.geekalerts.com%2fu%2fClassic-Simon-Game.jpg&ehk=%2fafSJHZ8jpxZ74YrFt%2bO%2fmSxJ1Cs3VlUkCr0Ot3RRcA%3d&risl=&pid=ImgRaw&r=0"
              alt="Simon Game Logo"
            />
            <span className={styles.buttonTitle}>Simon</span>
            <span className={styles.descriptionText}>
              Test your memory skills!
            </span>
          </a>
        </li>
        <li>
          <a
            href="blogger.html"
            target="_blank"
            className={`${styles.projectButton} ${styles.bloggerButton}`} // Use general and specific classes
          >
            <img
              src="https://th.bing.com/th/id/R.871e64298c23c6552492148fb0d74109?rik=h%2bLwFa3tRH0exg&riu=http%3a%2f%2fwww.e-rain.com%2fwp-content%2fuploads%2f2014%2f07%2fBlog-Creation-Blogging-Writing.jpg&ehk=Xm38iLEZZe8P1YyWxz%2bepuemcosboAC6V7DwVR8xHv8%3d&risl=&pid=ImgRaw&r=0"
              alt="Blogger Logo"
            />
            <span className={styles.buttonTitle}>Blogger</span>
            <span className={`${styles.descriptionText} ${styles.bloggerText}`}>
              Create an account & post your thoughts!
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;
