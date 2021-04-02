import React from "react";
import { Card } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

const Movie = ({ movies }) => {
  const { movieId } = useParams();
  let history = useHistory();
  function goBack() {
    history.push("/");
  }

  const movie = movies.find((movie) => movie.id === Number(movieId));
  return (
    <div style={{textAlign:"center"}}>
      <Card style={{ width: "40rem", marginLeft: "280px",}}>
        <Card.Body>
          <Card.Title style={{ height: "50px", textAlign:"center" }}>{movie.title}</Card.Title>
          <Card.Text style={{ height: "80px" }}>{movie.description}</Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;
       autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <Link to="/">go back</Link>  */}
      <br/>
      <button onClick={goBack}>go back</button>
    </div>
  );
};
export default Movie;
