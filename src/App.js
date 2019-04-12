import React, { Component } from "react";

import SquareCollab from "./components/SquareCollab/index.js";
import BoardCollab from "./components/BoardCollab/";

const App = () => (
    <>
        <BoardCollab >
            <SquareCollab />
        </BoardCollab>
    </>
);

export default App;