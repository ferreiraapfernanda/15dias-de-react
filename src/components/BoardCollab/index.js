import React from "react";

import SquareCollab from "../SquareCollab";
import "./styles.css";

/**
 * Função para exibir 9 squares no board
 */
const squareCollabs = (max) => {
    const squares = [];

    while (max--) {
        squares.push(<SquareCollab key={max}/>);
    }

    return squares;
}

const BoardCollab = ({ qtd }) => (
    <article className="board-collab">{squareCollabs(qtd)}</article>
);

export default BoardCollab;