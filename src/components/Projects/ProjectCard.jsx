import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, index, onOpen }) => {
  const {
    title,
    imageSrc,
    description,
    skills = [],
  } = project;

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.985 }}
      aria-label={`Open details for ${title}`}
    >
      <div className={styles.imageWrap}>
        <img
          src={imageSrc}
          alt={`${title} preview`}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageOverlay}>
          <span className={styles.viewLabel}>View project</span>
          <span className={styles.arrow}>↗</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.headingRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.number}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.skills} aria-label={`${title} technologies`}>
          {skills.slice(0, 4).map((skill) => (
            <span className={styles.skill} key={skill}>
              {skill}
            </span>
          ))}
          {skills.length > 4 && (
            <span className={`${styles.skill} ${styles.moreSkill}`}>
              +{skills.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
};

export default ProjectCard;
