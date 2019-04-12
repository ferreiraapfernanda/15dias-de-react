import React from "react";

import SquareCollab from "../SquareCollab";

/**
 * Função para exibir 9 squares no board
 */
const squareCollabs = (max) => {
    const squares = [];

    while (max--) {
        squares.push(<SquareCollab />);
    }

    return squares;
}

const BoardCollab = ({ qtd }) => (
    <article>{squareCollabs(qtd)}</article>
);

export default BoardCollab;