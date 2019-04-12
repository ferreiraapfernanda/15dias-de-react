import React from "react";

import SquareCollab from "../SquareCollab";

/**
 * Função para exibir 9 squares no board
 */
const squareCollabs = () => {
    let max = 9;
    const squares = [];

    while (max--) {
        squares.push(<SquareCollab />);
    }

    return squares;
}

const BoardCollab = () => (
    <article>{squareCollabs()}</article>
);

export default BoardCollab;