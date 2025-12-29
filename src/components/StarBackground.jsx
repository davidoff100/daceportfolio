import { useEffect, useState, useMemo } from "react";

// Optimize for mobile performance
const isMobile = () => window.innerWidth < 768;
const isLowPowerDevice = () => {
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
};

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const shouldReduceMotion = useMemo(() => 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  []);

  useEffect(() => {
    // Skip heavy animations on low-power devices or if user prefers reduced motion
    if (shouldReduceMotion || (isMobile() && isLowPowerDevice())) {
      return;
    }

    generateStars();
    generateMeteors();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        generateStars();
      }, 250); // Debounce resize
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [shouldReduceMotion]);

  const generateStars = () => {
    // Significantly reduce stars on mobile devices
    const baseDensity = isMobile() ? 15000 : 10000;
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / baseDensity
    );
    const maxStars = isMobile() ? 50 : 150;
    const finalStarCount = Math.min(numberOfStars, maxStars);

    const newStars = [];

    for (let i = 0; i < finalStarCount; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5, // Smaller stars
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.4,
        animationDuration: Math.random() * 5 + 3, // Slower animation
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    // Fewer meteors on mobile
    const numberOfMeteors = isMobile() ? 2 : 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  // Don't render anything if reduced motion or low power device
  if (shouldReduceMotion || (isMobile() && isLowPowerDevice())) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ willChange: 'auto' }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            willChange: 'opacity',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />
      ))}
    </div>
  );
};
