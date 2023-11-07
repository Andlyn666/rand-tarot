import React, { useEffect, useRef } from 'react';
import './StarBackground.css';

const StarBackground = () => {
  const canvasRef = useRef(null);

  const drawStars = (ctx, numStars, radius) => {
    for (let i = 0; i < numStars; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#9999ff';
      ctx.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let frameId;
    let numStars = 100;
    let frameCount = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.fillStyle = '#00004d';
      context.fillRect(0, 0, canvas.width, canvas.height);
      drawStars(context, numStars, 1.5);
    };

    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      frameCount++;
      if (frameCount === 15) { 
        context.fillStyle = '#00004d';
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawStars(context, numStars, 1.5); 
        frameCount = 0;
      }
      frameId = window.requestAnimationFrame(render);
    };
    
    resizeCanvas();
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default StarBackground;
