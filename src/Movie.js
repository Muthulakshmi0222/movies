import { useState } from 'react';
import { Counter } from './Counter';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";

export function Movie({ name, ratings, summary, pic, id,deleteButton,editButton }) {

  const [show, setShow] = useState(true);
  const history = useHistory();
  //Conditional styling
  const styles = {
    color: ratings < 8 ? "red" : "green",
    fontWeight: "bold",
  };
  return (
    <Card className="movie-container">
      <img
        src={pic}
        alt={name}
        className="movie-poster" />
        <CardContent>
      <div className="movie-specs">
        <h3 className="movie-name">{name}
        <IconButton 
      onClick={() => { 
        console.log(id);
        history.push("/movies/"+ id);
       } } 
      className="movie-show-button" 
      aria-label="More Info" color="primary">
          
      <InfoIcon />
  </IconButton>

  <IconButton 
      onClick={() => { setShow(!show); }} 
      className="movie-show-button" 
      aria-label="hide" color="primary">
      {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}

  </IconButton>

        </h3>
        <p className="movie-rating" style={styles}>⭐{ratings}</p>
      </div>
      {show ? <p className="movie-summary">{summary}</p> : ""}
      <CardActions>
      <Counter /> {editButton} {deleteButton} 
      </CardActions>
      </CardContent>
      
    </Card>
  );
}