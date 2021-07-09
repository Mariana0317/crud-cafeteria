import React from "react";
import { Col, Image } from "react-bootstrap";

const Index = () => {
  return (
    <div>
      <Col xs={12} className="d-flex justify-content-center">
        <Image
          src={process.env.PUBLIC_URL + "../thisLast.png"}
          className="w-50 "
        />
      </Col>
    </div>
  );
};

export default Index;
