import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.setProperty('--x', `${x}px`);
      cursor.style.setProperty('--y', `${y}px`);

      // Create glowing trail effect
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trail.style.left = `${x - 5}px`; // Position trail relative to cursor
      trail.style.top = `${y - 5}px`;

      // Remove trail after animation ends
      trail.addEventListener('animationend', () => {
        trail.remove();
      });
    });

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', null);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
