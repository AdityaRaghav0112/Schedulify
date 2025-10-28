/**
 * Centralized theme management utilities
 */

export const setTheme = (mode) => {
  const root = document.documentElement;
  const isDark = mode === 'dark';
  console.log('[theme] setting mode:', mode, 'isDark:', isDark);
  
  // Force removal/adding of class for reliability
  root.classList.remove('dark');
  root.classList.remove('light');
  if (isDark) root.classList.add('dark');
  
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  root.style.colorScheme = isDark ? 'dark' : 'light';
  
  console.log('[theme] classList:', root.classList.toString());
  console.log('[theme] data-theme:', root.getAttribute('data-theme'));
  
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch { /* ignore */ }
};

export const initTheme = () => {
  let mode = 'light';
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') mode = 'dark';
    else if (saved === 'light') mode = 'light';
  } catch { /* ignore */ }
  console.log('[theme] initializing as:', mode);
  setTheme(mode);
};

export const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  setTheme(next);
  return next;
};


