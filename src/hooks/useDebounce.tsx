import { useState, useEffect } from 'react';

// Credit: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
const useDebounce = <T,>(value: T, delay: number) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
};

export default useDebounce;
