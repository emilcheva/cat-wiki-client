import React from "react";
import FlexContainer from "../containers/flex";
import Score from "./score";
import ImageWrapper from "./image-wrapper";
import { Row, Col } from "react-bootstrap";

/**
 * Breed Detail component renders the main content of a given breed and an image
 */

const BreedDetail = ({ breed }) => {
  const {
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
    breedImage,
  } = breed;

  return (
    <>
      <section>
        <Row>
          <Col xs="auto">
            <ImageWrapper
              className="me-md-5"
              width="400"
              src={breedImage[0].url}
              alt={name}
            />
          </Col>
          <Col>
            <h2>{name}</h2>
            <p>{description}</p>
            <Row>
              <Col md="8">
                <FlexContainer className="mt-4" justifyContent="space-between">
                  <span className="fw-bolder">Temperament : </span>
                  <span className="d-inline-block">{temperament}</span>
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Origin: </span>
                  <span>{origin}</span>
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Life Span : </span>
                  <span>{life_span} years</span>
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="me-5 fw-bolder">Adaptability : </span>
                  <Score count={adaptability} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Affection Level : </span>
                  <Score count={affection_level} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Child Friendly : </span>
                  <Score count={child_friendly} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Grooming : </span>
                  <Score count={grooming} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Intelligence : </span>
                  <Score count={intelligence} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Health issues : </span>
                  <Score count={health_issues} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Social Needs : </span>
                  <Score count={social_needs} />
                </FlexContainer>
                <FlexContainer className="mt-3" justifyContent="space-between">
                  <span className="fw-bolder">Stranger friendly : </span>
                  <Score count={stranger_friendly} />
                </FlexContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="my-8">
        <h2>Other photos</h2>
        <Row>
          {breedImage.map((image) => (
            <Col>
              <ImageWrapper
                key={image.id}
                width="275"
                height="275"
                src={image.url}
                alt={name}
              />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default BreedDetail;
