import React from "react";
import styles from "./ProjectCard.module.css";
import githubLogo from "/assets/projects/githublogo.png";
import photoboothImage from "/assets/projects/photobooth.png";
import geographyQuizImage from "/assets/projects/geographyquiz.png";
import movieRecommendationsImage from "/assets/projects/movie-recommendations.png";

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  const isGeographyQuiz = imageSrc.includes('geographyquiz');
  
  const imageMap = {
    'assets/projects/photobooth.png': photoboothImage,
    'assets/projects/geographyquiz.png': geographyQuizImage,
    'assets/projects/movie-recommendations.png': movieRecommendationsImage
  };

  return (
    <div className={styles.container}>
      <img 
        src={imageMap[imageSrc] || imageSrc} 
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
