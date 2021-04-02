import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MoviesCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
    <Card className="movieCard">
        <Card.Img variant="top" src={movie.posterUrl} className="MovieImg" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <h4 className="star">{"⭐".repeat(movie.rate)}</h4>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Download</Button>
        </Card.Footer>
     </Card>
      <Link to={`/movie/${movie.id}`}>
        {" "}
        <Button>More Information</Button>
      </Link>
    </div>
  );
}

export default MovieCard;
