import React from "react";
import styles from "./ProjectCard.module.css";
import githubLogo from "/assets/projects/githublogo.png";

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  // Determine if this is the Geography Quiz project
  const isGeographyQuiz = imageSrc.includes('geographyquiz');

  return (
    <div className={styles.container}>
      <img 
        src={imageSrc} 
        alt={title} 
        className={`${styles.image} ${isGeographyQuiz ? styles.quizImage : ''}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>{skill}</li>
        ))}
      </ul>
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLogoContainer}
      >
        <img src={githubLogo} alt="GitHub logo" className={styles.githubLogo} />
      </a>
    </div>
  );
};

export default ProjectCard;
