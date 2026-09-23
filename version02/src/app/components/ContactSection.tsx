'use client';

import React, { useState } from 'react';
import { initialProfileData } from '../data/data';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
//   Github, 
//   Linkedin
} from 'lucide-react';
import styles from './ContactSection.module.css';


import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  const profile = initialProfileData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi ${profile.name},\n\n${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        
        {/* Contact Card */}
        <div className={styles.contactCard}>
          <div className={styles.sectionTagline}>
            <Mail className={styles.iconSmall} />
            <span>Get In Touch</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Let's Connect
          </h2>
          <p className={styles.sectionSubtitle}>
            I'm currently seeking internship opportunities and collaborative software projects. Feel free to reach out via email or connect on LinkedIn and GitHub!
          </p>

          <div className={styles.actionsRow}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={styles.copyEmailBtn}
            >
              {copiedEmail ? (
                <Check className={`${styles.iconMini} ${styles.iconCheck}`} />
              ) : (
                <Copy className={styles.iconMini} />
              )}
              <span>{copiedEmail ? 'Email Copied!' : profile.email}</span>
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              {/* <Github className={styles.iconMini} /> */}
              <FaGithub className={styles.iconMini} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              {/* <Linkedin className={styles.iconMini} /> */}
              <FaLinkedinIn className={styles.iconMini}/>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message..."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={styles.textareaField}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
            >
              <Send className={styles.iconSmall} />
              <span>{isSubmitted ? 'Message Sent!' : 'Send Direct Message'}</span>
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};