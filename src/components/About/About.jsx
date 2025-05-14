import React from 'react'
import styles from "./About.module.css"
import profileImage from "/assets/about/shyana.jpg"

export default function About() {
    return (
      <section id="about" className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Shyana!</h1>
          <p className={styles.description}>
            I'm a fourth-year Computer Engineering Student at the 
            <span className={styles.highlightBlue}> University of Waterloo</span>.
          </p>
          <p className={styles.description}>
            I'm passionate about technology and constantly curious about the world of software.
          </p>
          <p className={styles.description}>
            With experience in testing, development, and deployment, I’m exploring both 
            <span className={styles.highlightBlue}> software engineering</span> and <span className={styles.highlightBlue}>product management</span> — discovering how great ideas turn into real solutions. 
            I'm especially focused on expanding my technical skills while learning to bridge the gap between users, design, and development.
          </p>
          <p className={`${styles.description} ${styles.highlightGreen}`}>
            <span className={styles.highlightGreen}>Let's build something amazing together!</span>
          </p>
  
          <a href="#projects" className={`${styles.btn} ${styles.btnYellow}`}>Check out my work!</a>
        </div>
        <img src={profileImage} alt="image of me" className={styles.profileImage} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
      </section>
    );
}
