"use client";
import { useState } from "react";

function SquareButton(squareValue: any, onSquareClick: () => VoidFunction){
    return(
        <div>
            <button className="btn btn-neutral" onClick={onSquareClick}>
                {typeof squareValue === 'string' ? squareValue: null}
            </button>
        </div>
    );
};

export default SquareButton;