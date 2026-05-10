import { useEffect, useMemo, useState } from "react";

const GRID_COLUMNS = 11;
const GRID_ROWS = 7;
const MAX_CONNECTIONS = 3;
const REPULSE_RADIUS = 16;
const CONNECTION_RADIUS = 18;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const distanceSq = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
const distance = (a, b) => Math.sqrt(distanceSq(a, b));

const createDots = () => {
  const dots = [];
  const xGap = 86 / (GRID_COLUMNS - 1);
  const yGap = 78 / (GRID_ROWS - 1);

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLUMNS; col++) {
      const id = row * GRID_COLUMNS + col;
      const jitterX = (Math.random() - 0.5) * 4;
      const jitterY = (Math.random() - 0.5) * 4;

      dots.push({
        id,
        x: clamp(6 + col * xGap + jitterX, 4, 96),
        y: clamp(10 + row * yGap + jitterY, 6, 92),
        size: Math.random() * 2.4 + 2.2,
      });
    }
  }

  return dots;
};

const getConnections = (dot, dots) => {
  return dots
    .map((peer) => ({
      ...peer,
      dist: distanceSq(dot, peer),
    }))
    .filter((peer) => peer.id !== dot.id)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, MAX_CONNECTIONS);
};

export const StarBackground = () => {
  const [dots, setDots] = useState([]);
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    setDots(createDots());
  }, []);

  useEffect(() => {
    const handleWindowMove = (event) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setCursor({
        x: (event.clientX / width) * 100,
        y: (event.clientY / height) * 100,
      });
    };

    const handleWindowLeave = () => setCursor(null);

    window.addEventListener("mousemove", handleWindowMove);
    window.addEventListener("mouseleave", handleWindowLeave);
    window.addEventListener("blur", handleWindowLeave);

    return () => {
      window.removeEventListener("mousemove", handleWindowMove);
      window.removeEventListener("mouseleave", handleWindowLeave);
      window.removeEventListener("blur", handleWindowLeave);
    };
  }, []);

  const getDotPosition = (dot) => {
    if (!cursor) {
      return { x: dot.x, y: dot.y };
    }

    const dist = distance(cursor, dot);
    if (dist > REPULSE_RADIUS) {
      return { x: dot.x, y: dot.y };
    }

    const strength = (1 - dist / REPULSE_RADIUS) * 7;
    const dx = dot.x - cursor.x;
    const dy = dot.y - cursor.y;
    const norm = Math.sqrt(dx * dx + dy * dy) || 1;
    const offsetX = (dx / norm) * strength;
    const offsetY = (dy / norm) * strength;

    return {
      x: clamp(dot.x + offsetX, 0, 100),
      y: clamp(dot.y + offsetY, 0, 100),
    };
  };

  const activeLines = useMemo(() => {
    if (!cursor || dots.length === 0) return [];

    const lines = new Map();
    const nearbyDots = dots.filter((dot) => distance(cursor, dot) < CONNECTION_RADIUS);

    nearbyDots.forEach((dot) => {
      const connections = getConnections(dot, dots);
      connections.forEach((target) => {
        const key = [dot.id, target.id].sort().join("-");
        if (!lines.has(key) && distance(dot, target) < CONNECTION_RADIUS * 1.2) {
          lines.set(key, { from: dot, to: target });
        }
      });
    });

    return Array.from(lines.values());
  }, [cursor, dots]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 hack-grid" />
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <filter id="cursorGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {cursor && (
          <>
            <circle
              cx={`${cursor.x}%`}
              cy={`${cursor.y}%`}
              r="22"
              fill="rgba(56, 255, 211, 0.14)"
              filter="url(#cursorGlow)"
            />
            <circle
              cx={`${cursor.x}%`}
              cy={`${cursor.y}%`}
              r="6"
              fill="rgba(56, 255, 211, 0.95)"
              opacity="0.95"
            />
          </>
        )}
        {activeLines.map((line, index) => {
          const from = getDotPosition(line.from);
          const to = getDotPosition(line.to);
          return (
            <line
              key={`line-${index}`}
              className="hack-line active"
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => {
          const isActive = cursor && distance(cursor, dot) < CONNECTION_RADIUS;
          const pos = getDotPosition(dot);

          return (
            <div
              key={dot.id}
              className={`hack-dot ${isActive ? "active" : ""}`}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${dot.size * 2.3}px`,
                height: `${dot.size * 2.3}px`,
                opacity: isActive ? 1 : 0.75,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
