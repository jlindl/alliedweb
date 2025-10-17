import React, { useEffect } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  useEffect(() => {
    const id = 'shinytext-keyframes';
    if (!document.getElementById(id)) {
      const style = document.createElement('style');
      style.id = id;
      style.innerHTML = `@keyframes shinyTextMove { 0% { background-position: 200% 50%; } 100% { background-position: -200% 50%; } }`;
      document.head.appendChild(style);
    }
  }, []);

  const baseStyle: React.CSSProperties = {
    backgroundImage:
      'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 60%)',
    backgroundSize: '200% 100%',
    animation: disabled ? undefined : `shinyTextMove ${animationDuration} linear infinite`,
    display: 'inline-block'
  };

  // set clip and fill properties using camelCase names supported by React
  baseStyle.WebkitBackgroundClip = 'text';
  baseStyle.backgroundClip = 'text';
  // make sure the text itself is transparent so the background shows through
  baseStyle.color = 'transparent';
  baseStyle.WebkitTextFillColor = 'transparent';

  return (
    <span className={className} style={baseStyle} aria-hidden={disabled ? undefined : true}>
      {text}
    </span>
  );
};

export default ShinyText;
