import './Game.css'
import React , {useState , useEffect} from 'react'
import SquareComponent from './SquareComponent';

const initialState = [ "" , "" , "" , "" , "" , "" , "" , "" , ""];

export function Game() {

  const [gameState , setGameState] = useState(initialState);
  const [isXChance , setIsXChance] = useState(false);

  const onSquareClick = (index) =>{

     let strings = Array.from(gameState);
     if(strings[index])
     return;

     strings[index] = isXChance ? "X" : "O" ;
     setGameState(strings);
     setIsXChance(!isXChance);
     
  }

  useEffect(() =>{

     const winner = checkWinner();

     if(winner){
       alert(`yay! ${winner} is Winner 🥇 🏆`)
       setGameState(initialState);
     }
     
  },[gameState])

  const checkWinner = () => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="main-box">
      <h1 className="heading">Tic Tac Toe</h1>
      <div style={{justifyContent:'center', display:'flex'}}>
        <SquareComponent className="box1" state={gameState[0]} onClick={()=>onSquareClick(0)} />
        <SquareComponent className="box1" state={gameState[1]} onClick={()=>onSquareClick(1)} />
        <SquareComponent className="box2" state={gameState[2]} onClick={()=>onSquareClick(2)} />
      </div>
      <div style={{justifyContent:'center' , display:'flex'}}>
        <SquareComponent className="box1" state={gameState[3]} onClick={()=>onSquareClick(3)} />
        <SquareComponent className="box1" state={gameState[4]} onClick={()=>onSquareClick(4)} />
        <SquareComponent className="box2" state={gameState[5]} onClick={()=>onSquareClick(5)} />
      </div>
      <div style={{justifyContent:'center' , display:'flex'}}>
        <SquareComponent className="box3" state={gameState[6]} onClick={()=>onSquareClick(6)} />
        <SquareComponent className="box3" state={gameState[7]} onClick={()=>onSquareClick(7)} />
        <SquareComponent state={gameState[8]} onClick={()=>onSquareClick(8)} />
      </div>

      <button className="btn"style={{marginTop:'20px'}} onClick={()=>setGameState(initialState)} >Reset Game</button>
      <p className="made">Made by Anjum 😍</p>
    </div>
  );
}



