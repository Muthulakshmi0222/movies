import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


export function EditMovie() {
  const { id } = useParams();
  const [movie,setMovie] = useState(null);
  useEffect(()=>{
    fetch(`https://6166c4df13aa1d00170a6706.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((mv) => setMovie(mv));
  },[id]);
  return movie ? <UpdatedMovie movie={movie} /> : "";
}
 function UpdatedMovie ({movie}){
   const history = useHistory(); 
  const [name, setName] = useState(movie.name);
  const [pic, setPoster] = useState(movie.pic);
  const [ratings, setRating] = useState(movie.ratings);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
      const UpdatedMovie = { 
      name, 
      pic, 
      ratings, 
      summary, 
      trailer 
    
    };
    fetch(`https://6166c4df13aa1d00170a6706.mockapi.io/movies/${movie.id}`,
    {
      method:"PUT",
      body:JSON.stringify(UpdatedMovie),
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then(()=>history.push("/details/" + movie.id));
  };
   
  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(event) => setName(event.target.value)}
        label="Name" variant="filled" />

      <TextField value={pic} onChange={(event) => setPoster(event.target.value)}
        label="Image" variant="filled" />

      <TextField value={ratings} onChange={(event) => setRating(event.target.value)}
        label="Rating" variant="filled" />

      <TextField value={summary} onChange={(event) => setSummary(event.target.value)}
        label="Summary" variant="filled" />

<TextField value={trailer} onChange={(event) => setTrailer(event.target.value)}
        label="Trailer" variant="filled" />

      <Button onClick={editMovie} variant="contained" color="secondary">
        Save
      </Button>
    </div>

  );
}

