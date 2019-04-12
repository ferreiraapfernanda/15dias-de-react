import React from "react";

import BoardCollab from "./components/BoardCollab/";
import NextPlayer from "./components/NextPlayer";
import GameWrapper from "./components/GameWrapper";

const App = () => (
    <GameWrapper>
        <BoardCollab qtd="9" />
        <NextPlayer />
    </GameWrapper>
);

export default App;