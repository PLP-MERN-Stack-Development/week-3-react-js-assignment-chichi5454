import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const storedValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(storedValue);

  // Return a wrapped version of useState's setter function that 
  // persists the new value to localStorage.
  const setValueWithStorage = (newValue) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = 
        newValue instanceof Function ? newValue(value) : newValue;
      // Save state
      setValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setValueWithStorage];
}
