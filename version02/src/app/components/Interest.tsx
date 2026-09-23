'use client';

import React from 'react';
import { Brush, Code, Search, LucideIcon } from 'lucide-react';
import styles from './Interest.module.css';

interface InterestItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

const interestsData: InterestItem[] = [
  {
    id: 'designing',
    title: 'Designing',
    icon: Brush,
    description:
      "I've had a passion for design since I was young. I naturally notice small visual details that can be improved. I enjoy turning messy interfaces into clean, beautiful, and easy-to-use products.",
  },
  {
    id: 'developing',
    title: 'Developing',
    icon: Code,
    description:
      "I love solving puzzles. For me, writing code is like playing a puzzle. When developing code, I focus on breaking down complex logic and finding smart solutions to turn them into clean, functional software.",
  },
  {
    id: 'analyzing',
    title: 'Analyzing',
    icon: Search,
    description:
      'I believe that good code must be dependable under all conditions. I like analyzing system behavior, identifying edge cases, and making sure everything runs well.',
  },
];

export const InterestSection: React.FC = () => {
  return (
    <section className={styles.container}>

      <header className={styles.headerContainer}>
        <div className={styles.badge}>
          What I enjoy?
        </div>
        <h2 className={styles.title}>Interest</h2>
      </header>

      <div className={styles.cardsGrid}>
        {interestsData.map((item) => {
          const IconComponent = item.icon;

          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardGlowBorder} />

              <div className={styles.iconWrapper}>
                <div className={styles.iconOuterGlow} />

                <div className={styles.iconCircle}>
                  <div className={styles.iconInner}>
                    <IconComponent
                      className={styles.icon}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};