import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory  } from "react-router-dom";

export function AddMovie() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [pic, setPoster] = useState("");
  const [ratings, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    // console.log("Adding movies...", name, pic, ratings, summary);
    const newMovie = { name, pic, ratings, summary, trailer };

    console.log(newMovie);
    // setMovies([...movies, newMovie]);
   

    fetch(
      `https://6166c4eb13aa1d00170a671d.mockapi.io/movies-list/`,
      {
      method:"POST",
      body:JSON.stringify(newMovie),
      headers: {
        'Content-Type': 'application/json'
      }
      }).then(()=>  history.push("/movies"));
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

      <Button className="add-button" onClick={addMovie} variant="contained" color="secondary">
        Save
      </Button>

    </div>

  );
}
