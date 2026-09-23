import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

interface AboutMeProps {
  name?: string;
  age?: number;
  country?: string;
  profileImageUrl?: string;
  blogUrl?: string;
}

export const About: React.FC = () => {
  return (
    <section className={styles.container} id='about'>
      <div className={styles.content}>
        <header className={styles.headerContainer}>
        <div className={styles.badge}>
          Who am I?
        </div>
        <h2 className={styles.title}>About Me</h2>
      </header>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Profile Image Column */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} />
            <div className={styles.imageBorder}>
              <div className={styles.imageContainer}>
                <Image
                  src="/profile.jpg"
                  alt="Vinita"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 340px"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.bioText}>
            <p>
             I'm a 5th-semester Computer Science student focusing on Artificial Intelligence, who love problem-solving and building things with code.           
            </p>
            <p>My coding journey began in junior high school, and after just six months of learning, I started building my own projects. Since then, I've continued exploring different areas of computer science and challenging myself to turn ideas into practical solutions.</p>
            <p>To strengthen my logical thinking and problem-solving skills, I actively participate in competitive programming. It has taught me how to break down complex problems into smaller, manageable parts, explore different approaches, and develop efficient algorithms.</p>
            <p>I'm always curious to learn new things, take on challenges, and turn ideas into practical solutions through technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
