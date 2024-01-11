"use client";
import { useState } from "react";
import SquareButton from "./SquareButton";

// interface for typescript function params
export interface SquareButtonInterface {
    squareValue: string;
    onSquareClick: Function;
}

function Board(){
    //Square array
    const [squares, setSquares] = useState(Array(9).fill(null));

    // update square
    function handleClick(i: number){
        const nextSqaures = squares.slice();
        nextSqaures[i] = 'X';
        setSquares(nextSqaures);
    }



    return(
          <div className='grid grid-rows-3 grid-flow-col gap-4'>

            <SquareButton SquareButtonInterface/>


            <SquareButton sqaureValue={squares[0]} onSquareClick={() => handleClick(0)}/>
            <SquareButton sqaureValue={squares[1]} onSquareClick={() => handleClick(1)}/>
            <SquareButton sqaureValue={squares[2]} onSquareClick={() => handleClick(2)}/>
            <SquareButton sqaureValue={squares[3]} onSquareClick={() => handleClick(3)}/>
            <SquareButton sqaureValue={squares[4]} onSquareClick={() => handleClick(4)}/>
            <SquareButton sqaureValue={squares[5]} onSquareClick={() => handleClick(5)}/>
            <SquareButton sqaureValue={squares[6]} onSquareClick={() => handleClick(6)}/>
            <SquareButton sqaureValue={squares[7]} onSquareClick={() => handleClick(7)}/>
            <SquareButton sqaureValue={squares[8]} onSquareClick={() => handleClick(8)}/>
          </div>
    );
};

export default Board;