import React, { useRef, useEffect } from 'react';
import './index.css';

const LazyImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin: '-300px' }
    );

    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const dataSrc = imageRef.current.getAttribute('data-src');
      if (dataSrc) {
        imageRef.current.src = dataSrc;
      }
    }
  }, [isIntersecting]);

  return (
    <img
      className='lazy-image'
      ref={imageRef}
      src={src + `?w=10`}
      alt={alt}
      data-src={src + `?w=1800`}
    />
  );
};

export default LazyImage;
