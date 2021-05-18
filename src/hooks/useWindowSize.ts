import { useState, useEffect } from 'react';

interface dimensions {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  let dimension: dimensions = { width: undefined, height: undefined };

  const [windowSize, setWindowSize] = useState(dimension);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
