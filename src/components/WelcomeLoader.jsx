import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WelcomeLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const text = "Welcome";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)',
    zIndex: 9999,
    transition: 'opacity 0.5s ease-in-out',
    opacity: fadeOut ? 0 : 1
  };

  const dotStyle = {
    width: '12px',
    height: '12px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 4px',
    animation: 'bounce 1s infinite'
  };

  return (
    <>
      {loading && (
        <div style={loaderStyle}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-center">
              <motion.h1 
                className="display-1 fw-bold text-white mb-4 d-flex justify-content-center"
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ fontSize: '5rem' }}
              >
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={child}
                    style={{ display: 'inline-block' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div 
                className="d-flex justify-content-center gap-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span style={{...dotStyle, animationDelay: '0ms'}}></span>
                <span style={{...dotStyle, animationDelay: '150ms'}}></span>
                <span style={{...dotStyle, animationDelay: '300ms'}}></span>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </>
  );
}