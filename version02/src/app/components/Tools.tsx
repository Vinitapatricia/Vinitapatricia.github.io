import React from 'react';
import styles from './Tools.module.css';

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

const toolsList: ToolItem[] = [
  {
    name: 'C++',
    icon: (
      <div style={{ backgroundColor: '#00599C', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '18px', fontFamily: 'sans-serif' }}>
        C++
      </div>
    ),
  },

   {
    name: 'Python',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24">
        <path d="M11.897 0c-5.12 0-4.8 2.223-4.8 2.223l.006 2.301h4.864v.688H5.111s-3.611.41-3.611 5.12c0 4.71 3.15 4.542 3.15 4.542h1.88v-2.628s-.1-3.15 3.15-3.15h5.12s2.962.052 2.962-2.852c0-2.903-2.438-2.956-2.438-2.956h-.841V2.223S14.887 0 11.897 0zm-2.49 1.488a.861.861 0 1 1 0 1.723.861.861 0 0 1 0-1.723z" fill="#3776AB"/>
        <path d="M12.103 24c5.12 0 4.8-2.223 4.8-2.223l-.006-2.301h-4.864v-.688h6.856s3.611-.41 3.611-5.12c0-4.71-3.15-4.542-3.15-4.542h-1.88v2.628s.1 3.15-3.15 3.15h-5.12s-2.962-.052-2.962 2.852c0 2.903 2.438 2.956 2.438 2.956h.841v1.287s-.404 2.223 2.586 2.223zm2.49-1.488a.861.861 0 1 1 0-1.723.861.861 0 0 1 0 1.723z" fill="#FFD43B"/>
      </svg>
    ),
  },

  {
    name: 'JavaScript',
    icon: (
      <div style={{ backgroundColor: '#F7DF1E', width: '42px', height: '42px', borderRadius: '4px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '3px', fontWeight: 'bold', color: '#000', fontSize: '18px', fontFamily: 'sans-serif' }}>
        JS
      </div>
    ),
  },
 

  {
    name: 'React',
    icon: (
      <svg width="42" height="42" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'NodeJS',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.78v11.55L12 25l10-5.67V7.78L12 2z" fill="#339933"/>
        <path d="M12 4.5L4 9.12v9.25L12 23l8-4.63V9.12L12 4.5z" fill="#66CC33"/>
      </svg>
    ),
  },
  {
    name: 'HTML',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563L1.5 0z" fill="#E44D26"/>
        <path d="M12 22V2.182h8.803l-1.637 18.396L12 22z" fill="#F16529"/>
        <path d="M12 8.727H7.364l.327 3.682H12v3.682H7.69l.328 3.682 3.982 1.09 3.982-1.09.436-4.909H12.5v-2.455h6.327l-.763 8.591L12 22.227l-6.064-1.636-.982-11.046H12V8.727z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563L1.5 0z" fill="#264DE4"/>
        <path d="M12 22V2.182h8.803l-1.637 18.396L12 22z" fill="#2965F1"/>
        <path d="M12 8.727H7.364l.164 1.841h4.472v3.682H7.69l.328 3.682 3.982 1.09 3.982-1.09.545-6.137H8.018l-.164-1.841H16.82l.327-3.682H12V8.727z" fill="#EBEBEB"/>
      </svg>
    ),
  },

  {
    name: 'SQL',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },

  {
    name: 'VSCode',
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
        <path d="M23.15 2.587L18.21.79a1.49 1.49 0 00-1.705.517l-8.52 10.155-4.49-3.4a1 1 0 00-1.348.138L.333 10.372a.8.8 0 000 1.056l4.28 4.954-4.28 4.954a.8.8 0 000 1.056l1.814 2.182a1 1 0 001.348.138l4.49-3.4 8.52 10.155a1.49 1.49 0 001.705.517l4.94-1.797A1.5 1.5 0 0024 21.84V3.96a1.5 1.5 0 00-.85-1.373z" fill="#007ACC"/>
        <path d="M18 5.25v13.5l-6.75-6.75L18 5.25z" fill="#0066B8"/>
      </svg>
    ),
  },
  {
    name: 'Github',
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#8B5CF6"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg width="40" height="46" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
];

export const Tools: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>What I use?</div>
          <h2 className={styles.title}>Skills & Tools</h2>
        </div>

        {/* Tools Cards Grid */}
        <div className={styles.toolsGrid}>
          {toolsList.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <div className={styles.iconContainer}>{tool.icon}</div>
              <span className={styles.toolName}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
