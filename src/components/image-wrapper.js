import React from 'react';
import styled from '@emotion/styled';

const ImageWrapper = ({ src, width, height, alt, className }) => {
  return (
      <Image className={className} src={src} width={width} height={height} alt={alt} />
  );
};

export default ImageWrapper;

const Image = styled.img(`
    object-fit: cover;
    border-radius: 24px;
    max-width: 100%;
   
    @media (max-width: 768px) {
      height: 200px;
      width: 200px;
    }
`)