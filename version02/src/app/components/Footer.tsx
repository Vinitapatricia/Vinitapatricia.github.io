'use client';

import React from 'react';
import { initialProfileData } from '../data/data';
import { 
  ArrowUp, 

  Mail
} from 'lucide-react';
import styles from './Footer.module.css';

import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const profile = initialProfileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.actionsWrapper}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="GitHub"
          >
            <FaGithub className={styles.iconSmall}/>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="LinkedIn"
          >
            <FaLinkedinIn className={styles.iconSmall}/>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={styles.socialLink}
            title="Email"
          >
            <Mail className={styles.iconSmall} />
          </a>
          <button
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            title="Back to Top"
          >
            <ArrowUp className={styles.iconArrow} />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};