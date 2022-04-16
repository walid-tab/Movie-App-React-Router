import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  
  return (
    <div >
      
      <Card style={{ width: '18rem',height:"500px" }}>
  <Card.Img variant="top" src={movie.posterUrl} style={{ height: "40%" }}  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text style={{ textAlign: 'justify'}}>
    Click on "see more" to see more details about film.
    </Card.Text>
    <Card.Title style={{ margin: '20px  0 20px 0' }}>Rating : {movie.rate}</Card.Title>
    <Button variant="primary" as={Link} to={`/movies/${movie.id}`}>See more</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard