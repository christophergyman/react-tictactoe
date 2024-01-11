"use client";
import { useState } from "react";
import { SquareButtonInterface } from "./Board";

interface MyComponentProps {
    data: SquareButtonInterface
}

const SquareButton: React.FC<SquareButtonInterface> = ({}) => {
    return (
        <div>
            <p>Square value: {}}</p>
        </div>
    );
};

export default SquareButton;