import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Default styles
import 'tippy.js/animations/shift-away-subtle.css'; // Optional animations
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/translucent.css'; // Add dark mode theme

const Tooltip = ({
  content,
  children,
  isDarkMode, // Receive dark mode state as a prop
  placement = 'top',
  animation = 'shift-away-subtle',
  delay = [10, 50],
  interactive = true,
  arrow = true,
  className = '',
  contentClassName = '',
  maxWidth = '250px',
  offset = [0, 10], // Added offset with default value
  ...props
}) => {
  return (
    <Tippy
      content={content}
      placement={placement}
      animation={animation}
      delay={delay}
      theme={isDarkMode ? 'translucent' : 'light-border'} // Switch theme
      interactive={interactive}
      arrow={arrow}
      maxWidth={maxWidth}
      offset={offset} // Added offset prop
      className={`p-0.5 rounded-md font-jost ${className}`}
      {...props}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
