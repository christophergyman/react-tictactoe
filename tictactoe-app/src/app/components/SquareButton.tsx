"use client";
import { useState } from "react";

function SquareButton(){

    // set button counter variable
    const [value, setValue] = useState('  ');

    // func handle click
    function handleClick(){
        setValue('X');
    }

    return(
        <div>
            <button className="btn btn-neutral" onClick={handleClick}>
                {value}
            </button>
        </div>
    );
};

export default SquareButton;