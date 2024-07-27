'use client';
import { RefObject, useEffect } from 'react';

const useDetectOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
) => {
  const handler = (e: MouseEvent | TouchEvent) => {
    if (!ref || ref.current?.contains(e.target as Node)) return;

    callback();
  };

  useEffect(() => {
    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);
};

export default useDetectOutsideClick;
