import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  //let like=10;
  //const [state,setState]=useState(InitialValue);

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  return (
    
    <div className="counter-container">
      <IconButton className="like-unlike" onClick={incrementLike} aria-label="like"
      color="primary">
        <Badge badgeContent={like} color="primary">
        👍
</Badge>
      
  </IconButton>

      <IconButton className="like-unlike" onClick={()=>setDislike(dislike+1)}
       aria-label="dislike"
      color="error">
        <Badge badgeContent={dislike} color="error">
     👎
     </Badge>
  </IconButton>
    </div>

  );
}