// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export const useWindowDimension = (): number[] => {
  const [dimension, setDimension] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      /* console.log('***** debounced resize'); */ // See the cool difference in console
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100); // 100ms
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []); // Note this empty array. this effect should run only on mount and unmount
  return dimension;
};
