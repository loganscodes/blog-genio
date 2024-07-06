'use client'
import React, { useEffect, useRef } from 'react';

interface CustomContentProps {
  content: string;
}

const CustomContent: React.FC<CustomContentProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const images = contentRef.current.querySelectorAll('img');
      images.forEach((img) => {
        img.style.maxWidth = '500px';
        img.style.height = '500px';
        img.style.marginTop = '100px'
        img.style.marginBottom = '100px'
      });
    }
  }, [content]);

  return <div className='flex flex-col items-center justify-center w-[80%] m-auto' ref={contentRef} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default CustomContent;
