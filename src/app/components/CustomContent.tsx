'use client'
import { useEffect, useRef } from 'react';

interface Props {
  content: string;
}

const CustomContent = ({ content }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const images = contentRef.current.querySelectorAll('img');
      images.forEach((img) => {
        img.style.maxWidth = '500px';
        img.style.height = '600px';
        img.style.marginTop = '100px'
        img.style.marginBottom = '100px'
        img.style.objectFit = 'cover'
      });
    }
  }, [content]);

  return <div className='flex flex-col items-center justify-center w-[80%] m-auto' ref={contentRef} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default CustomContent;
