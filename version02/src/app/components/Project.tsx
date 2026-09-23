'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Projects.module.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';
import {ExternalLink,   ArrowRight,Code2} from 'lucide-react';
interface ProjectItem {
  id: string;
  title: string;
  description: string;
  visitUrl?: string;
  previewImage: string;
  githubUrl: string;
}

const projectsList: ProjectItem[] = [
  {
    id: 'lekan',
    title: 'LeKan',
    description: 'LeKaN is a real-time online seafood auction platform that directly connects fishermen with buyers through a transparent, live-bidding marketplace.',
    visitUrl: 'https://lekan-one.vercel.app/',
    previewImage: '/lekan.png',
    githubUrl : "https://github.com/Vinitapatricia/lekan"
  },
  {
    id: 'ecoplus',
    title: 'EcoPlus',
    description: 'EcoPlus is a Machine Learning Model for Country Classification Based on Global Energy Metrics',
    visitUrl: 'https://ecopulse-jqzo6qhu3eqnoacrt6iybf.streamlit.app/',
    previewImage: '/ecoplus.png',
    githubUrl: 'https://github.com/Vinitapatricia/EcoPlus'
  },
  {
    id: 'squirrel',
    title: 'Squirrel',
    description: 'Squirrel is a gamified time management and productivity app designed to make managing tasks, schedules, and notes simple, engaging, and fun.',
    previewImage: '/squirrel.png',
    githubUrl: 'https://github.com/Vinitapatricia/Squirrel',
    visitUrl: 'https://www.figma.com/proto/YQsyzNY17ELsVLysNWSzbt/Squirel?node-id=115-1126&starting-point-node-id=115%3A1126&t=Q0onQspyuYKEg0cK-1'
  },
];

export const Projects: React.FC = () => {
  return (
    <section className={styles.container} id='projects'>

      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>What I've done?</div>
          <h2 className={styles.title}>Projects</h2>
        </div>

        {/* Projects Cards Grid */}
        <div className={styles.projectsGrid}>
          {projectsList.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div>
                {/* Card Header: Icon, Title, Tech Stack, & Button/Badge */}
                <div className={styles.cardHeader}>
                  <div className={styles.projectTitleSection}>
                    <div className={styles.projectMeta}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                  </div>

                  
                    <div className={styles.externalLink}>
                      {/* <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visitBtn}
                    >
                      Visit ↗
                    </a> */}

                    <Link  href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className= {styles.externalicon}
                      title="GitHub Repository"
                      aria-label={`${project.title} GitHub Repository`}>
                      <FaGithub />
                    </Link>
                    {project.visitUrl && (
                      <Link
                        href={project.visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.externalicon}
                        title="Live Demonstration"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className= {styles.livedemo} />
                      </Link>
                    )}
                    
                    </div>
                    
                  
                </div>

                {/* Description */}
                <p className={styles.projectDescription}>{project.description}</p>
              </div>

              {/* Preview Image Frame */}
              <div className={styles.imageContainer}>
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className={styles.previewImage}
                />
              </div>

              {/* <div>
                <button
                  // onClick={() => onSelectProject?.(project)}
                  className={styles.button}
                  aria-label={`View architecture details for ${project.title}`}
                >
                  <span className={styles.buttonspan}>
                    <Code2 className={styles.buttonspanicon} />
                    Architecture & Code
                  </span>
                  <ArrowRight className={styles.arrowicon} />
                </button>
              </div>   */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;