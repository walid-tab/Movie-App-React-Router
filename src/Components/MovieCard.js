import React from 'react'
// import { Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";


function MovieCard({movie}) {
  
  return (
    <div >

<div className="hero-container">
    <div className="main-container">
      <div className="poster-container">
        
          <img  src={movie.posterUrl}  className="poster"     alt='imageFilm'     />
        
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title">{movie.title}</h4>
          <p className="ticket__movie-slogan">
          Click on "see more" to see more details about film.
          </p>
          <p className="ticket__current-rate">{movie.rate}</p>
          <Link to={`/movies/${movie.id}`}>
          <button className="ticket__buy-btn"   >See more</button>

          </Link>
        </div>
      </div>
    </div>
    
  </div>


     
      
      {/* <Card style={{ width: '18rem',height:"500px" }}>
  <Card.Img variant="top" src={movie.posterUrl} style={{ height: "40%" }}  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text style={{ textAlign: 'justify'}}>
    Click on "see more" to see more details about film.
    </Card.Text>
    <Card.Title style={{ margin: '20px  0 20px 0' }}>Rating : {movie.rate}</Card.Title>
    <Button variant="primary" as={Link} to={`/movies/${movie.id}`}>See more</Button>
  </Card.Body>
</Card> */}
    </div>
  )
}

export default MovieCard