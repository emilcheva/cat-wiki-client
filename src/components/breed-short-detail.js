import React from "react";
import ImageWrapper from "./image-wrapper";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { Row, Col } from 'react-bootstrap';
import { colors } from "../styles";

/**
 * Breed Short Detail component renders the name and an image of a given breed
 */

const BreedShortDetail = ({ breed }) => {
  return (
    <BreedInfo>
      <Row className="align-items-center">
        <Col xs='auto' className='me-md-4 mb-3'>
          <ImageWrapper
            className='mb-4'
            width="200"
            height="200"
            src={breed?.breedImage[0]?.url}
          />
        </Col>
        <Col xs='12' md='7'>
          <BreedInfoCounter>
            <Link to={`/breed/${breed.name}`}>
              <span>{breed?.name}</span>
            </Link>
          </BreedInfoCounter>
          <p>{breed?.description}</p>
        </Col>
      </Row>
    </BreedInfo>
  );
};

export default BreedShortDetail;

const BreedInfo = styled.div({
  margin: "1rem"
});

const BreedInfoCounter = styled.div`
  margin-bottom: 1rem;
  counter-increment: my-counter;
  font-size: 1.5rem;
  color: ${colors.text};
  &:before{
    content: counter(my-counter) ". ";
  }
`;
