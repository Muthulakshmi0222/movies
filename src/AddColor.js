import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = { backgroundColor: color };

  const [colors, setColors] = useState(["teal", "red", "green"]);
  // const colors=["teal","red","green"];
  return (
    <div className="add-color-form">
      <TextField value={color} onChange={(event) => setColor(event.target.value)}
        style={styles} id="filled-basic" label="Enter a Color" variant="filled" />
      {/* <input
            placeholder="Enter a color"/> */}

      <Button onClick={() => setColors([...colors, color])} variant="outlined">Add Color</Button>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}