import React from 'react'
import { Card, Button } from "react-bootstrap"
import "./MoviesCard.css"

function MovieCard({ movie }) {
    return (
        <Card className="movieCard">
            <Card.Img variant="top" src={movie.posterUrl} className="MovieImg" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <h4 className="star">{"⭐".repeat(movie.rate)}</h4>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Download</Button>
            </Card.Footer>
        </Card>
    )
}

export default MovieCard