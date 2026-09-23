'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProfileData, Project, Experience } from '../types';
import { initialProfileData } from '../data/data';

interface PortfolioContextType {
  profile: ProfileData;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  updateProfile: (updated: Partial<ProfileData>) => void;
  resetToDefaults: () => void;
  activeProjectModal: Project | null;
  setActiveProjectModal: (project: Project | null) => void;
  isResumeModalOpen: boolean;
  setIsResumeModalOpen: (open: boolean) => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'cs_student_portfolio_data_v1';
const THEME_STORAGE_KEY = 'cs_student_portfolio_theme';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // ignore
      }
    }
    return initialProfileData;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme !== null) {
          return savedTheme === 'dark';
        }
      } catch {
        // ignore
      }
    }
    return true; // Default to dark developer slate theme
  });

  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    } catch {
      // ignore
    }
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const updateProfile = (updated: Partial<ProfileData>) => {
    setProfile(prev => ({
      ...prev,
      ...updated,
    }));
    showToast('Portfolio changes saved!');
  };

  const resetToDefaults = () => {
    setProfile(initialProfileData);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // ignore
    }
    showToast('Reset portfolio data to default!');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        isDarkMode,
        toggleDarkMode,
        updateProfile,
        resetToDefaults,
        activeProjectModal,
        setActiveProjectModal,
        isResumeModalOpen,
        setIsResumeModalOpen,
        isEditModalOpen,
        setIsEditModalOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};