import React from 'react';
import styled from '@emotion/styled';

const ImageWrapper = ({ src, width, height, alt }) => {
  return (
      <Image src={src} width={width} height={height} alt={alt} />
  );
};

export default ImageWrapper;

const Image = styled.img({
    objectFit: 'cover',
    borderRadius: '24px',
    marginBottom: '20px'
})