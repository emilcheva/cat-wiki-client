import React from 'react';
import ImageWrapper from './image-wrapper';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import { Row, Col } from 'react-bootstrap';
import { colors } from '../styles';
import PropTypes from 'prop-types';

/**
 * Breed Short Detail component renders the name and an image of a given breed
 */

const BreedShortDetail = ({ breedImage, name, description }) => {
  return (
    <BreedInfo>
      <Row className="align-items-center">
        <Col xs="auto" className="me-md-4 mb-3">
          <ImageWrapper className="mb-4" width="200" height="200" src={breedImage.url} />
        </Col>
        <Col xs="12" md="7">
          <BreedInfoCounter>
            <Link to={`/breed/${name}`}>
              <span>{name}</span>
            </Link>
          </BreedInfoCounter>
          <p>{description}</p>
        </Col>
      </Row>
    </BreedInfo>
  );
};

BreedShortDetail.propTypes = {
  breedImage: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string
};

export default BreedShortDetail;

const BreedInfo = styled.div({
  margin: '1rem'
});

const BreedInfoCounter = styled.div`
  margin-bottom: 1rem;
  counter-increment: my-counter;
  font-size: 1.5rem;
  color: ${colors.text};
  &:before {
    content: counter(my-counter) '. ';
  }
`;
