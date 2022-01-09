import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BreedDetailItem = ({ text, children }) => {
  return (
    <Row className="mt-3 mt-lg-4">
      <Col md="4">
        <span className="fw-bolder">
          {text}
          {': '}
        </span>
      </Col>
      <Col md="8">{children}</Col>
    </Row>
  );
};

BreedDetailItem.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any
};

export default BreedDetailItem;
