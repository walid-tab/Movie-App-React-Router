import React from 'react'
import MovieCard from '../Components/MovieCard'

function MoviesList({movies,search}) {
  return (
    <div style={{margin:'20px', 
    display:'flex',flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center', gap:'20px'}}>
  
      {movies.filter((mv)=> mv.title.toLowerCase().includes(search.toLowerCase())).map((movie,index)=><MovieCard movie={movie} key={index}/>)}
    </div>
  )
}

export default MoviesList