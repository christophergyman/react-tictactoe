"use client";
import { useState } from "react";
import SquareButton from "./SquareButton";

function Board(){
    //Square array
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(){
        const nextSqaures = squares.slice();
        nextSqaures[0] = 'X';
        setSquares(nextSqaures);
    }

    return(
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <SquareButton sqaureValue={squares[0]} onSquareClick={handleClick}/>
          </div>
    );
};

export default Board;