import React,{useEffect, useState} from 'react'
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard'


const API_URL="http://www.omdbapi.com?apikey=f17b4e26"

const App = () => {

const [movies,setmovies]= useState([])
const [searchTerm,setSearchterm]=useState("")

 const searchMovies= async(title)=>{
   const response= await fetch(`${API_URL}&s=${title}`)
   const data = await response.json()

   setmovies(data.Search)
 }

 //!to call movies at start
  useEffect(()=>{
   searchMovies("Avenger")
  },[])


  return (
    <>
    <div className='app'>
      <h1>MovieZone</h1>

      <div className='search'>
        <input 
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e)=>setSearchterm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt='search'
        onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length>0
        ?(
          <div className='container'>
               {movies.map((movie)=>
              <MovieCard movie={movie} />
               )}
          </div>
        ):
        (
          <div className='empty'>
            <h2>No movies found😣😥!</h2>
          </div>
        )
      }

      
    </div>
    </>
  )
}

export default App

//!  f17b4e26