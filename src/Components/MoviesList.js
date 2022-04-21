import React from 'react'
import MovieCard from '../Components/MovieCard'

function MoviesList({movies,search,handeleDelete}) {
  return (
    <div style={{margin:'20px', 
    display:'flex',flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center', gap:'20px'}}>
  
      {movies.filter((mv)=> mv.title.toLowerCase().includes(search.toLowerCase().trim()))
      .map((movie,index)=><MovieCard movie={movie} key={index} handeleDelete={handeleDelete}/>)}
    </div>
  )
}

export default MoviesList