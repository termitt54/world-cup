import React from "react";
import { StackGamesAfrica } from "./components/Africa";
import { StackGamesAsia } from "./components/Asia";
import { StackGamesEurope } from "./components/Europe";
import { StackGamesNorthAmerica } from "./components/NorthAmerica";
import { StackGamesOther } from "./components/Other";
import { StackGamesSouthAmerica } from "./components/SouthAmerica";
import './index.scss';

export const StackGames = () => {
    return (
        <div className="stack-games">
            <StackGamesEurope/>
            <StackGamesAfrica/>
            <StackGamesAsia/>
            <StackGamesNorthAmerica/>
            <StackGamesSouthAmerica/>
            <StackGamesOther/>
        </div>
    )
}