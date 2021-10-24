import React from "react";
import { Form, Button } from "react-bootstrap";

export const Contribute = () => {
  return (
    <>
      <Form className="form-style">
        <h1>How to contribute ?</h1>
        <h6>1.CLike on the button below.</h6>
        <h6>
          {" "}
          2.Fill the form details like Book cover Image title and pdf of book
        </h6>
        <h6> 3.Click on Submit</h6>
        <h6>4.The book will be vrified by admin and will be published</h6>
        <Button className="contribute" onClick="">
          Contribute
        </Button>
      </Form>
    </>
  );
};
