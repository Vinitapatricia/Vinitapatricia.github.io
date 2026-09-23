'use client';

import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import styles from './Experience.module.css';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  learnings?: string;
}

const experienceData: ExperienceItem[] =[
    {
    id: "sasc-mentor-2026",
    role: "SASC Scholarship Mentor - Odd Semester 2026/2027",
    company: "BINUS University",
    location: "West Jakarta, Jakarta, Indonesia",
    period: "Sep 2026 - Present",
    summary: "Mentoring scholarship students at BINUS University for the Odd Semester 2026/2027.",
    bullets: [
      "Provided mentoring and guidance to scholarship recipients.",
      "Communicated effectively to support students' academic performance."
    ],
    technologies: ["Mentoring", "Communication"]
  },
  {
    id: "jollybee-member",
    role: "Member",
    company: "Jollybee Binus",
    location: "Jakarta, Indonesia",
    period: "Jul 2025 - Present",
    summary: "Active member at Jollybee Binus focusing on competitive programming and team collaboration.",
    bullets: [
      "Collaborated with team members on competitive programming tasks.",
      "Participated in team management and skill development activities."
    ],
    technologies: ["Teamwork", "Team Management", "Competitive Programming", "Problem Solving", "C++"]
  },
  {
    id: "sasc-mentor-2025",
    role: "SASC Scholarship Mentor - Odd Semester 2025/2026",
    company: "BINUS University",
    location: "West Jakarta, Jakarta, Indonesia · On-site",
    period: "Sep 2025 - Jan 2026",
    summary: "Served as an on-site scholarship mentor at BINUS University for the Odd Semester 2025/2026.",
    bullets: [
      "Conducted on-site mentoring sessions for scholarship students.",
      "Fostered effective communication and academic guidance."
    ],
    technologies: ["Mentoring", "Communication"]
  }
  ]

export const Experience: React.FC = () => {

  return (
    <section id="experience" className={styles.container} aria-label="Experience and Mentorship">
       
        <header className={styles.headerContainer}>
        <div className={styles.badge}>
          What I did?
        </div>
        <h2 className={styles.title}>Experience</h2>
      </header>

      

        <div className={styles.timelineWrapper}>
            <div className={styles.timelineSpine} aria-hidden="true" />
        <div className={styles.experienceList}>
          {experienceData.map((exp) => (
            
            <article key={exp.id} className={styles.experienceCard}>
                <div className={styles.dot}></div>
              <div className={styles.expHeaderRow}>
                <div>
                  <h3 className={styles.expRoleTitle}>
                    {exp.role}
                  </h3>
                  <div className={styles.expCompanyName}>
                    {exp.company} • {exp.location}
                  </div>
                </div>

                <div className={styles.expPeriodBadge}>
                  <span className={styles.periodBadgeContent}>
                    <Calendar className={styles.calendaricon} />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              <p className={styles.expSummary}>
                {exp.summary}
              </p>

              <ul className={styles.expBullets}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className={styles.expBulletItem}>
                    <CheckCircle2 className={styles.checkIcon} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.learnings && (
                <div className={styles.keyTakeaway}>
                  <Sparkles className={styles.sparkleIcon} />
                  <span><strong>Key Takeaway:</strong> {exp.learnings}</span>
                </div>
              )}

              <div className={styles.techPillContainer}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.projectTechPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
            
          ))}
          </div>
        </div>

    </section>
  );
};