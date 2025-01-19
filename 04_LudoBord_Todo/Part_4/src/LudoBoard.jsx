import { useState } from "react";
function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0,red: 0,yellow:0,green:0});
    let updateBlue = () =>{
        setMoves({...moves, blue: moves.blue +1});
    }
    let updategreen = () =>{
        setMoves({...moves, green: moves.green +1});
    }
    let updateyellow = () =>{
        setMoves({...moves, yellow: moves.yellow +1});
    }
    let updatered = () =>{
        setMoves({...moves, red: moves.red +1});
    }
  return (
    <>
      <div>
        <h2>Game Satrt!!!</h2>
        <div className="board">
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>

            <p>Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color:"black"}} onClick={updateyellow}>+1</button>

            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updategreen}>+1</button>

            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updatered}>+1</button>

        </div>
      </div>
    </>
  );
}

export default LudoBoard;