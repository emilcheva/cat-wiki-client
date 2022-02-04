import React from 'react';
import Score from './score';
import ImageWrapper from './image-wrapper';
import { Row, Col } from 'react-bootstrap';
import BreedDetailItem from './breed-detail-item';
import PropTypes from 'prop-types';

/**
 * Breed Detail component renders the main content of a given breed and an image
 */

const BreedDetail = ({ breed }) => {
  const {
    description,
    name,
    temperament,
    strangerFriendly,
    socialNeeds,
    healthIssues,
    intelligence,
    grooming,
    childFriendly,
    affectionLevel,
    adaptability,
    lifeSpan,
    origin,
    breedImage
  } = breed;
  return (
    <>
      <section>
        <Row>
          <Col xs="auto" className="mb-4 me-lg-5">
            <ImageWrapper
              width="270"
              height="270"
              src={
                breedImage.length
                  ? breedImage[0]?.url
                  : 'https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
              }
              alt={name}
            />
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
                  <span>{lifeSpan} years</span>
                </BreedDetailItem>
                <BreedDetailItem text="Adaptability">
                  <Score count={adaptability} />
                </BreedDetailItem>
                <BreedDetailItem text="Affection Level">
                  <Score count={affectionLevel} />
                </BreedDetailItem>
                <BreedDetailItem text="Child Friendly">
                  <Score count={childFriendly} />
                </BreedDetailItem>
                <BreedDetailItem text="Grooming">
                  <Score count={grooming} />
                </BreedDetailItem>
                <BreedDetailItem text="Intelligence">
                  <Score count={intelligence} />
                </BreedDetailItem>
                <BreedDetailItem text="Health issues">
                  <Score count={healthIssues} />
                </BreedDetailItem>
                <BreedDetailItem text="Social Needs">
                  <Score count={socialNeeds} />
                </BreedDetailItem>
                <BreedDetailItem text="Stranger friendly">
                  <Score count={strangerFriendly} />
                </BreedDetailItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="my-5">
        {breedImage.length > 0 ? (
          <>
            <h2>Other photos</h2>
            <Row>
              {breedImage.map((image) => (
                <Col sm="6" lg="3" className="mb-4" key={image.id}>
                  <ImageWrapper src={image.url} width="100%" height="250" alt={name} />
                </Col>
              ))}
            </Row>
          </>
        ) : null}
      </section>
    </>
  );
};

BreedDetail.propTypes = {
  breed: PropTypes.object,
  description: PropTypes.string,
  name: PropTypes.string,
  temperament: PropTypes.string,
  strangerFriendly: PropTypes.number,
  socialNeeds: PropTypes.number,
  healthIssues: PropTypes.number,
  intelligence: PropTypes.number,
  grooming: PropTypes.number,
  childFriendly: PropTypes.number,
  affectionLevel: PropTypes.number,
  adaptability: PropTypes.number,
  lifeSpan: PropTypes.number,
  origin: PropTypes.string,
  breedImage: PropTypes.array
};

export default BreedDetail;
