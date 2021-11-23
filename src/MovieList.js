import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react';


export function MovieList() {

  const [movies,setMovies]=useState([]);

  const getMovies = ()=>{
  
      fetch("https://6166c4eb13aa1d00170a671d.mockapi.io/movies-list")
      .then((data)=>data.json())
      .then(mvs=>setMovies(mvs));
    }
useEffect(getMovies, []);

const deleteMovie= (id) => {
  fetch(
  `https://6166c4eb13aa1d00170a671d.mockapi.io/movies-list/${id}`,
  {
  method:"DELETE",
})
.then(()=>getMovies());
}; 

  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, pic,id} ,index) => (
        <Movie
          name={name}
          ratings={ratings}
          summary={summary}
          pic={pic} 
          id={id}
           deleteButton={ 
           <IconButton 
            onClick={() => deleteMovie(id) }
            className="movie-show-button" 
            aria-label="delete movie" 
            color="error">
                
            <DeleteTwoToneIcon />
        </IconButton>
           }
           editButton={
             <IconButton style={{marginLeft:"auto"}}
            onClick={() => history.push("/movies/edit/" +index) } 
            className="movie-show-button" 
            aria-label="edit movie" 
            color="primary">
          
            <EditTwoToneIcon />
        </IconButton>
           }
           />
      ))}
    </section>
  );
}


  