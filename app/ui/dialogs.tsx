import React, { useEffect, useRef, useState } from 'react';

interface DialogProps {
  children: React.ReactNode;
  triggerNode: HTMLDivElement | null;
}

export function Dialog({ children, triggerNode }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (triggerNode) {
      const handleTriggerClick = () => {
        setIsVisible(prev => !prev);
      };

      triggerNode.addEventListener('click', handleTriggerClick);

      return () => {
        triggerNode.removeEventListener('click', handleTriggerClick);
      };
    }
  }, [triggerNode]);

  return (
    <>
      {isVisible && (
        <div
          ref={dialogRef}
          className="absolute bg-pink-200 shadow-lg rounded-lg p-4 text-black z-50"
          style={{ top: `40px`, left: `-15px` }}
        >
          {children}
        </div>
      )}
    </>
  );
}
