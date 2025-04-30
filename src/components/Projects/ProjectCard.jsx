import React from "react";
import styles from "./ProjectCard.module.css";
import githubLogo from "/assets/projects/githublogo.png";
import projectImage from "/assets/projects/project.png";
import geographyQuizImage from "/assets/projects/geographyquiz.png";

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  // Select the appropriate image based on the imageSrc
  const getImage = () => {
    if (imageSrc.includes('geographyquiz')) return geographyQuizImage;
    return projectImage;
  };

  // Determine if this is the Geography Quiz project
  const isGeographyQuiz = imageSrc.includes('geographyquiz');

  return (
    <div className={styles.container}>
      <img 
        src={getImage()} 
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
