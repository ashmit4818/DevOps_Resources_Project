import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // Update cursor position
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.setProperty('--x', `${x}px`);
      cursor.style.setProperty('--y', `${y}px`);
    };

    document.addEventListener('mousemove', moveCursor);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
