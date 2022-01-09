import React from 'react';
import Score from './score';
import ImageWrapper from './image-wrapper';
import { Row, Col } from 'react-bootstrap';
import BreedDetailItem from './breed-detail-item';
import PropTypes from 'prop-types';

/**
 * Breed Detail component renders the main content of a given breed and an image
 */

const BreedDetail = ({
  description,
  name,
  temperament,
  stranger_friendly,
  social_needs,
  health_issues,
  intelligence,
  grooming,
  child_friendly,
  affection_level,
  adaptability,
  life_span,
  origin,
  breedImage
}) => {
  return (
    <>
      <section>
        <Row>
          <Col xs="auto" className="mb-4 me-lg-5">
            <ImageWrapper width="270" height="270" src={breedImage[0].url} alt={name} />
          </Col>
          <Col lg="6">
            <h2>{name}</h2>
            <p>{description}</p>
            <Row>
              <Col>
                <BreedDetailItem text="Temperament">
                  <span className="d-inline-block">{temperament}</span>
                </BreedDetailItem>
                <BreedDetailItem text="Origin">
                  <span className="d-inline-block">{origin}</span>
                </BreedDetailItem>
                <BreedDetailItem text="Life Span">
                  <span>{life_span} years</span>
                </BreedDetailItem>
                <BreedDetailItem text="Adaptability">
                  <Score count={adaptability} />
                </BreedDetailItem>
                <BreedDetailItem text="Affection Level">
                  <Score count={affection_level} />
                </BreedDetailItem>
                <BreedDetailItem text="Child Friendly">
                  <Score count={child_friendly} />
                </BreedDetailItem>
                <BreedDetailItem text="Grooming">
                  <Score count={grooming} />
                </BreedDetailItem>
                <BreedDetailItem text="Intelligence">
                  <Score count={intelligence} />
                </BreedDetailItem>
                <BreedDetailItem text="Health issues">
                  <Score count={health_issues} />
                </BreedDetailItem>
                <BreedDetailItem text="Social Needs">
                  <Score count={social_needs} />
                </BreedDetailItem>
                <BreedDetailItem text="Stranger friendly">
                  <Score count={stranger_friendly} />
                </BreedDetailItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="my-5">
        <h2>Other photos</h2>
        <Row>
          {breedImage.map((image, index) => (
            <Col sm="6" lg="3" className="mb-4" key={index}>
              <ImageWrapper key={image.id} src={image.url} width="100%" height="250" alt={name} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

BreedDetail.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  temperament: PropTypes.string,
  stranger_friendly: PropTypes.number,
  social_needs: PropTypes.number,
  health_issues: PropTypes.number,
  intelligence: PropTypes.number,
  grooming: PropTypes.number,
  child_friendly: PropTypes.number,
  affection_level: PropTypes.number,
  adaptability: PropTypes.number,
  life_span: PropTypes.number,
  origin: PropTypes.string,
  breedImage: PropTypes.array
};

export default BreedDetail;
