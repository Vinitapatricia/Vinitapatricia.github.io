'use client';

import React from 'react';
import Link from 'next/link';
import { initialProfileData } from '../data/data';
import { 
  ArrowDown, 
  FolderGit2, 
} from 'lucide-react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const profile = initialProfileData;
  return (
    <section id="home" className={styles.heroSection}>
      
    
      <div className={styles.container}>
        
        <div className={styles.left}>
          
            <div className={styles.titleGroup}>
            <h1 className={styles.mainTitle}>
              Hi, I'm 
              <span className={styles.gradientTitle}>
                Vinita
              </span>
            </h1>
            <h3 className={styles.mainTitleSubtitle}>
              Computer Science Student
            </h3>
          </div>

          <p className={styles.tagline}>
          Computer Science student with an AI focus, passionate about building reliable software, ensuring code quality, and solving complex problems.
          </p>

          <div className= {styles.heroCtaBar}>
            
            <a href="#contact" className= {styles.ctaBtnPrimary}>
              <span>Contact Me</span>
            </a>
            <a href="#projects" className= {styles.ctaSecond}>
              <span>View Work</span>
            </a>
          </div>

          <div className={styles.socialContainer}>
      <Link href={profile.github} className={`${styles.socialIcon}`} aria-label="GitHub">
        <FaGithub />
      </Link>
      <Link href={profile.linkedin} className={`${styles.socialIcon}`} aria-label="LinkedIn">
        <FaLinkedinIn />
      </Link>
      {/* <Link href="#" className={`${styles.socialIcon}`} aria-label="Twitter">
        <FaTwitter />
      </Link> */}
      {/* <Link href="#" className={`${styles.socialIcon}`} aria-label="Dribbble">
        <FaDribbble />
      </Link> */}
    </div>
      
          
        </div>
        
        <div className= {styles.heroPortraitWrapper}>
          <div className={styles.ambientGlow} />
            <img 
              src='profile-removebg.png' alt="profile"
              className={styles.heroPortraitImg}
              referrerPolicy="no-referrer"
            />
          </div>
      </div>

      
    </section>
  );
};