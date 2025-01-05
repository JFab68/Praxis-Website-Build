import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const Image = ({ src, alt, className = '', width, height }: ImageProps) => {
  // Convert image URL to WebP if it's from Unsplash
  const getWebPUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      return `${url}&fm=webp`;
    }
    return url;
  };

  return (
    <img
      src={getWebPUrl(src)}
      alt={alt}
      className={`${className} ${!src.startsWith('data:') ? 'image-loading' : ''}`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default Image;