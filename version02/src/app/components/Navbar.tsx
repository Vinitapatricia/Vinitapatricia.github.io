'use client';

import React, { useState, useEffect } from 'react';
import { initialProfileData } from '../data/data';
import { 
  Sun,
  Moon
} from 'lucide-react';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const profile = initialProfileData;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'projects' | 'experience'>('home');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }
  }, []);

  useEffect(() => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');

    const isDark = savedTheme ? savedTheme === 'dark' : true;

    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}, []);

  // Keyboard shortcut listener for '/' to navigate to projects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' || 
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === '/') {
        e.preventDefault();
        setActiveTab('projects');
        const projectsElement = document.getElementById('projects') || document.getElementById('projects');
        if (projectsElement) {
          projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (tab: 'home' | 'about' | 'projects' | 'experience', targetId: string) => {
    setActiveTab(tab);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
   
        <div className={`${styles.pointerEventsAuto} ${styles.navCapsule}`}>
          

          <button
            onClick={() => handleNavClick('home', 'home')}
            id="nav-pill-home"
            className={`${styles.navBtn} ${activeTab === 'home' ? styles.navBtnActive : ''}`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about', 'about')}
            id="nav-pill-about"
            className={`${styles.navBtn} ${activeTab === 'about' ? styles.navBtnActive : ''}`}
          >
            About Me
          </button>

          <button
            onClick={() => handleNavClick('projects', 'projects')}
            id="nav-pill-projects"
            className={`${styles.navBtn} ${activeTab === 'projects' ? styles.navBtnActive : ''}`}
          >
            <span>projects</span>
            <span className={styles.shortcutTag}>/</span>
          </button>

          <button
            onClick={() => handleNavClick('experience', 'experience')}
            id="nav-pill-experience"
            className={`${styles.navBtn} ${styles.navBtnExperience} ${activeTab === 'experience' ? styles.navBtnActive : ''}`}
          >
            Experience
          </button>

          
          {/* <button
            onClick={toggleDarkMode}
            id="mobile-theme-toggle"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={styles.mobileThemeToggle}
          >
            {isDarkMode ? (
              <Sun className={`${styles.iconSmall} ${styles.iconAmber}`} />
            ) : (
              <Moon className={`${styles.iconSmall} ${styles.iconDarkNeutral}`} />
            )}
          </button> */}
        </div>

        
        {/* <div className={`${styles.pointerEventsAuto} ${styles.actionsContainer}`}>
          <button
            // onClick={toggleDarkMode}
            id="theme-toggle-btn"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={styles.actionBtn}
          >
            {isDarkMode ? (
              <Sun className={`${styles.iconSmall} ${styles.iconAmber}`} />
            ) : (
              <Moon className={`${styles.iconSmall} ${styles.iconDarkNeutral}`} />
            )}
          </button>
        </div> */}

      </div>
    </header>
  );
};