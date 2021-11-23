
import './App.css';
import { Switch, Route,Redirect, useHistory} from "react-router-dom";
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import {useState} from 'react';
import "./App.css";
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export default function App() {
  

const history = useHistory();
const [mode,setMode] =useState("dark");


const theme = createTheme({
  palette: {
    mode: mode,
  },
});


return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} style={{borderRadius:"0px", minHeight:"100vh"}}>
    <div className="App">

<AppBar position="static" style={{marginBottom:"26px",height:"50px"}}>
  <Toolbar variant="dense">
  <Button variant="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>

    <Button variant="text" color="inherit" onClick={()=>history.push("/movies")}>Movies</Button>
  
  <Button variant="text" color="inherit" onClick={()=>history.push("/add-movies")}>Add Movies</Button>
  
  <Button variant="text" color="inherit" onClick={()=>history.push("/color-game")}>Color Game</Button>

  <Button variant="text" color="inherit" onClick={()=>history.push("/tic-tac-toe")}>Tic-Tac-Toe Game</Button>

  <Button 
  startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  style={{marginLeft: "auto"}} variant="text" color="inherit" 
  onClick={()=> setMode (mode==="light" ? "dark" :"light")} 
  >
    {mode==="light" ? "Dark" : "Light"} mode 
    </Button>
    </Toolbar>
</AppBar>

       <Switch>
    <Route exact path="/">
        <Welcome/>
      </Route>

      <Route path="/films">
        <Redirect to="/movies"/>
          </Route>

      <Route path="/movies/edit/:id">
        <EditMovie /></Route>

       <Route path="/movies/:id">
       <MovieDetails />
       </Route>


      <Route path="/movies"> 
         <MovieList/>
      </Route>

      <Route path="/add-movies">
        <AddMovie />
      </Route>

      <Route path="/color-game">
       <AddColor/>
      </Route>
      <Route path="/tic-tac-toe">
       <TicTacToe/>
      </Route>


      <Route path="**">
       <NotFound />
      </Route>

       </Switch>
       
  </div>
  </Paper>
  </ThemeProvider>
          );
      }
//Created Tic Tac Toe game

function TicTacToe() {
  const { width, height } = useWindowSize()
  const [board,setBoard] = 
  // useState([0,1,2,3,4,5,6,7,8]);
    useState([null,null,null,null,null,null,null,null,null]);
      const [isXTurn,setIsXTurn] = useState(true);
  

  const decideWinner = (board) => {
    const lines = [[0,1,2], [3,4,5], 
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],
    [2,4,6],

    ];

    for (let i=0;i<lines.length;i++) {
      const [a,b,c] = lines[i];

      if(board[a]!==null && board[a]===board[b] && board[b]===board[c]) {
      // console.log("Winner is", board[a]);
      return board[a];
    }
  }
  return null;
  };
  const winner = decideWinner(board);

  const handleClick=(index)=>{
   
    if(winner===null && !board[index]){
    const boardCopy = [...board]
    boardCopy[index]=isXTurn ? "X" : "O";
    setBoard(boardCopy);
    setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="full-game">
      {winner ? <Confetti
      width={width}
      height={height} gravity={0.5} numberOfPieces={600} /> : ""}
   
    <div className="board">
      {board.map((val,index)=> (
        <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
      ))}
  
    </div>
    {winner ? <h2>Winner is: {winner}</h2> : ""}
    </div>
  );
      }

function GameBox({ onPlayerClick, val }) {
  // const [val,setVal] =useState(null);
  const styles = { color : val === "X" ? "green": "red"};
  return (
  <div style={styles}
  onClick={onPlayerClick} className="game-box">
    
 {val}
 </div>
  );

}