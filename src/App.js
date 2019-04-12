import React from "react";

import BoardCollab from "./components/BoardCollab/";
import NextPlayer from "./components/NextPlayer";

const App = () => (
    <>
        <BoardCollab qtd="9" />
        <NextPlayer />
    </>
);

export default App;