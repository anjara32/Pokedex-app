import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="theme-toggle">
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
