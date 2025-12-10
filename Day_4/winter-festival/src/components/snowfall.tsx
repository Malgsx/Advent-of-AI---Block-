"use client";

import { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  opacity: number;
  swing: number;
  swingSpeed: number;
}

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createSnowflake = (): Snowflake => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      wind: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.3,
      swing: Math.random() * Math.PI * 2,
      swingSpeed: Math.random() * 0.02 + 0.01,
    });

    const snowflakeCount = Math.min(150, Math.floor(window.innerWidth / 10));
    const snowflakes: Snowflake[] = Array.from({ length: snowflakeCount }, () => {
      const flake = createSnowflake();
      flake.y = Math.random() * canvas.height;
      return flake;
    });

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        flake.swing += flake.swingSpeed;
        flake.x += Math.sin(flake.swing) * 0.5 + flake.wind;
        flake.y += flake.speed;

        if (flake.y > canvas.height + flake.radius) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width + flake.radius) {
          flake.x = -flake.radius;
        }
        if (flake.x < -flake.radius) {
          flake.x = canvas.width + flake.radius;
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
