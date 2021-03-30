import React from "react";
import { Card } from "react-bootstrap";
import {Iframe} from "react-player";
import { Link } from 'react-router-dom'
export const Movie = ({
    name , description , trailer
}) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px"}}>
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{name}</Card.Title>
          <Card.Text style={{ height: "80px" }}>{description}</Card.Text>
          <Card.Text style={{ height: "80px" }}>{trailer}</Card.Text>
          <Link to="/MoviesList">
                <button variant="info">Go Back</button>
            </Link>
        </Card.Body>
        
      </Card>
      

    </div>
  );
};