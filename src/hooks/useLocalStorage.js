import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    // console.log(`useLocalStorage useEffect `);
    // console.log(key, state);
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
