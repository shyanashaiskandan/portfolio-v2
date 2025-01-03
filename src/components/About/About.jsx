import React from 'react'
import styles from "./About.module.css"

export default function About() {
  return (
    <section id="about" className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shyana!</h1>
            <p className={styles.description}>I'm a fourth year Computer Engineering Student at the University of Waterloo.

I'm passionate about technology and constantly curious about the world of software.

I'm currently exploring full-stack development , learning how to connect frontend and backend systems to build more complete solutions.

Let's build something amazing together!</p>
            <a href="#projects" className={styles.btn}>Check out my work!</a>
        </div>
        <img src="/assets/about/heroImage.png" alt="image of me" className={styles.profileImage}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
    </section>
  )
}
