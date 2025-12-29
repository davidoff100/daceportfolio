import { useEffect, useState, useMemo } from "react";

// Optimize for mobile performance
const isMobile = () => window.innerWidth < 768;
const isLowPowerDevice = () => {
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
};

const STAR_COLORS = [
  { color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.8)', weight: 40 }, // White
  { color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.8)', weight: 25 },   // Cyan
  { color: '#60a5fa', glow: 'rgba(96, 165, 250, 0.8)', weight: 20 },  // Blue
  { color: '#a78bfa', glow: 'rgba(167, 139, 250, 0.8)', weight: 10 }, // Purple
  { color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.8)', weight: 5 },   // Yellow
];

const getRandomColor = () => {
  const totalWeight = STAR_COLORS.reduce((sum, c) => sum + c.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const colorObj of STAR_COLORS) {
    if (random < colorObj.weight) return colorObj;
    random -= colorObj.weight;
  }
  return STAR_COLORS[0];
};

// Generate initial stars immediately
const generateInitialStars = () => {
  const baseDensity = isMobile() ? 12000 : 6000;
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / baseDensity
  );
  const maxStars = isMobile() ? 80 : 250;
  const finalStarCount = Math.min(numberOfStars, maxStars);
  const newStars = [];

  for (let i = 0; i < finalStarCount; i++) {
    const colorObj = getRandomColor();
    const size = Math.random() * 3 + 0.5;
    const isTwinkling = Math.random() > 0.6;
    
    newStars.push({
      id: i,
      size: size,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      color: colorObj.color,
      glow: colorObj.glow,
      animationDuration: Math.random() * 4 + 2,
      isTwinkling: isTwinkling,
      twinkleDelay: Math.random() * 5,
      glowSize: size > 2 ? size * 3 : 0,
    });
  }
  return newStars;
};

const generateInitialMeteors = () => {
  const numberOfMeteors = isMobile() ? 3 : 6;
  const newMeteors = [];

  for (let i = 0; i < numberOfMeteors; i++) {
    const colorObj = getRandomColor();
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 30,
      delay: 0, // Start immediately
      animationDuration: Math.random() * 2 + 3, // Slower: 3-5s
      color: colorObj.glow,
    });
  }
  return newMeteors;
};

const generateInitialNebulas = () => {
  const numberOfNebulas = isMobile() ? 2 : 4;
  const newNebulas = [];

  for (let i = 0; i < numberOfNebulas; i++) {
    newNebulas.push({
      id: i,
      size: Math.random() * 300 + 200,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.1 + 0.05,
      color: i % 2 === 0 ? 'rgba(6, 182, 212, 0.15)' : 'rgba(167, 139, 250, 0.15)',
      animationDuration: Math.random() * 15 + 20, // Slower: 20-35s
    });
  }
  return newNebulas;
};

export const StarBackground = () => {
  const shouldReduceMotion = useMemo(() => 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  []);
  
  // Always render unless user prefers reduced motion
  const shouldRender = !shouldReduceMotion;
  
  const [stars, setStars] = useState(() => shouldRender ? generateInitialStars() : []);
  const [meteors, setMeteors] = useState(() => shouldRender ? generateInitialMeteors() : []);
  const [nebulas, setNebulas] = useState(() => shouldRender ? generateInitialNebulas() : []);

  useEffect(() => {
    // Skip heavy animations if user prefers reduced motion
    if (!shouldRender) {
      return;
    }

    // Only handle resize, stars are already initialized
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        generateStars();
        generateNebulas();
      }, 250); // Debounce resize
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [shouldReduceMotion]);

  const generateStars = () => {
    // More stars for wow factor, but optimized for mobile
    const baseDensity = isMobile() ? 12000 : 6000;
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / baseDensity
    );
    const maxStars = isMobile() ? 80 : 250;
    const finalStarCount = Math.min(numberOfStars, maxStars);

    const newStars = [];

    for (let i = 0; i < finalStarCount; i++) {
      const colorObj = getRandomColor();
      const size = Math.random() * 3 + 0.5;
      const isTwinkling = Math.random() > 0.6; // 40% twinkle
      
      newStars.push({
        id: i,
        size: size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        color: colorObj.color,
        glow: colorObj.glow,
        animationDuration: Math.random() * 3 + 3, // Slower: 3-6s
        isTwinkling: isTwinkling,
        twinkleDelay: 0, // Start immediately
        glowSize: size > 2 ? size * 3 : 0, // Only large stars glow
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    // More meteors for visual impact
    const numberOfMeteors = isMobile() ? 3 : 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const colorObj = getRandomColor();
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 2 + 2,
        color: colorObj.glow,
      });
    }

    setMeteors(newMeteors);
  };

  const generateNebulas = () => {
    // Add nebula clouds for depth
    const numberOfNebulas = isMobile() ? 2 : 4;
    const newNebulas = [];

    for (let i = 0; i < numberOfNebulas; i++) {
      newNebulas.push({
        id: i,
        size: Math.random() * 300 + 200,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.1 + 0.05,
        color: i % 2 === 0 ? 'rgba(6, 182, 212, 0.15)' : 'rgba(167, 139, 250, 0.15)',
        animationDuration: Math.random() * 20 + 15,
      });
    }

    setNebulas(newNebulas);
  };

  // Don't render anything if reduced motion or low power device
  if (!shouldRender) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ willChange: 'auto' }}>
      {/* Nebula clouds for depth */}
      {nebulas.map((nebula) => (
        <div
          key={`nebula-${nebula.id}`}
          className="absolute rounded-full blur-3xl animate-pulse-subtle"
          style={{
            width: nebula.size + "px",
            height: nebula.size + "px",
            left: nebula.x + "%",
            top: nebula.y + "%",
            background: nebula.color,
            opacity: nebula.opacity,
            animationDuration: nebula.animationDuration + "s",
            transform: 'translateZ(0)',
          }}
        />
      ))}

      {/* Enhanced stars with colors and glow */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={star.isTwinkling ? "absolute animate-pulse-subtle" : "absolute"}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            backgroundColor: star.color,
            borderRadius: '50%',
            boxShadow: star.glowSize > 0 
              ? `0 0 ${star.glowSize}px ${star.glowSize / 2}px ${star.glow}`
              : `0 0 4px 1px ${star.glow}`,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.twinkleDelay + "s",
            willChange: star.isTwinkling ? 'opacity' : 'auto',
            transform: 'translateZ(0)',
          }}
        />
      ))}

      {/* Enhanced meteors with color trails */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-meteor"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            borderRadius: '50%',
            background: `linear-gradient(to right, ${meteor.color}, transparent)`,
            boxShadow: `0 0 15px 5px ${meteor.color}`,
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        />
      ))}
    </div>
  );
};
