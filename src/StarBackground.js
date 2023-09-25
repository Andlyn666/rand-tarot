import React, { useEffect, useRef } from 'react';
import './StarBackground.css';

const StarBackground = () => {
  const canvasRef = useRef(null);

  const drawStars = (ctx, numStars, radius) => {
    for (let i = 0; i < numStars; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI); // Increase the value of radius to increase the size of stars
      ctx.fillStyle = '#9999ff';
      ctx.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frameId;
    let numStars = 100;
    let frameCount = 0; // Added frameCount variable

    const render = () => {
      frameCount++;
      if (frameCount === 15) { // Change this to adjust the frequency of star movement
        context.fillStyle = '#00004d';
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawStars(context, numStars, 1.5); // Increased radius value for bigger stars
        frameCount = 0;
      }
      frameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default StarBackground;
