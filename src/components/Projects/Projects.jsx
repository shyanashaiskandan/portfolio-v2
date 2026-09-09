import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Projects</h2>
        </motion.div>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title || index}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.article
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>

              <div className={styles.modalImageWrap}>
                <img
                  className={styles.modalImage}
                  src={selectedProject.imageSrc}
                  alt={`${selectedProject.title} preview`}
                />
              </div>

              <div className={styles.modalBody}>
                <span className={styles.modalEyebrow}>Project details</span>
                <h3 className={styles.modalTitle} id="project-modal-title">
                  {selectedProject.title}
                </h3>

                <p className={styles.modalDescription}>
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>

                {selectedProject.highlights?.length > 0 && (
                  <ul className={styles.highlights}>
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.modalSkills}>
                  {(selectedProject.skills || []).map((skill) => (
                    <span className={styles.modalSkill} key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  {selectedProject.source && (
                    <a
                      className={`${styles.actionButton} ${styles.primaryAction}`}
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View code <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {selectedProject.demo && (
                    <a
                      className={`${styles.actionButton} ${styles.secondaryAction}`}
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
