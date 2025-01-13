import React from 'react';
import styles from './Contact.module.css';
import github from "/assets/Contact/github.png";
import linkedin from "/assets/Contact/linkedin.png";
import email from "/assets/Contact/email.png";

const Contact = () => {
  return (
    <div id="contact" className={styles.contactCard}>
      <div className={styles.imageContainer}>
        <img
          src="/assets/Contact/test.png" // Replace with your image source
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.name}>Reach Out to Me!</h2>
        <p className={styles.title}>
          I’m constantly learning and love connecting with others who are just as passionate about technology. 
          Let’s chat :)
        </p>
        <div className={styles.contactInfo}>
          <p>
            <span className={styles.label}>Linkedin:</span> +123-456-7890
          </p>
          <p>
            <span className={styles.label}>Github:</span> hello@reallygreatsite.com
          </p>
          <p>
            <span className={styles.label}>Email:</span> 123 Anywhere St, Any City
          </p>
        </div>
        <div className={styles.contactLinks}>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <img src={linkedin} alt="LinkedIn" className={styles.contactIcon} />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <img src={github} alt="GitHub" className={styles.contactIcon} />
          </a>
          <a
            href="mailto:hello@reallygreatsite.com"
            className={styles.contactButton}
          >
            <img src={email} alt="Email" className={styles.contactIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
