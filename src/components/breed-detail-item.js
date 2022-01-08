import React from "react";
import FlexContainer from "../containers/flex";
import { Row, Col } from "react-bootstrap";

const BreedDetailItem = ({ text, children }) => {
  return (
    <Row className="mt-3 mt-lg-4">
      <Col md="4">
        <span className="fw-bolder">{text}{": "}</span>
      </Col>
      <Col md="8">{children}</Col>
    </Row>
  );
};

export default BreedDetailItem;
