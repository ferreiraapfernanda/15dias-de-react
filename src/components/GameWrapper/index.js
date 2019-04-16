import React, { Component } from "react";
import "./styles.css";
import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";
import HistoryCollab from "../HistoryCollab";

class GameWrapper extends Component {

    state = { player: "X" };

    handleClick = () => {
        this.setState({ player: this.state.player === "X" ? "O" : "X" })
    }

    render() {
        return (
            <main className="game-wrapper">
                <NextPlayer player={this.state.player} />
                <BoardCollab onClick={this.handleClick} />
                <HistoryCollab />
            </main>
        );
    }

}

export default GameWrapper;