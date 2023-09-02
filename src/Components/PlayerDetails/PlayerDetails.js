<<<<<<< HEAD
import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./PlayerDetails.module.css";

const PlayerDetails = () => {
    const routeParams = useParams();
    const activeTeam = useSelector((state) => state.teams.teams[state.teams.activeTeam] ? state.teams.teams[state.teams.activeTeam] : (Math.random()*(7-0)+0) );
    const activePlayer = activeTeam.playing11[routeParams.id]

    return (
        <>
            <div className={classes.PlayerDetailsContainer}>
                <div className={classes.ImageContainer}>
                    <img src={activePlayer.img} alt={activePlayer.name + "image"}/>
                </div>
                <div className={classes.InfoContainer}>
                    <p>Name:  {activePlayer.name}</p>
                    <p>Team Name:  {activeTeam.teamName}</p>
                    <p>Price:  ₹{Math.floor(Math.random()*(18-5)+5)} Cr</p>
                    <p>Status:  Playing</p>
                    <p>Role:  {activePlayer.role}</p>
                </div>
            </div>
        </>
    )
}

=======
import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./PlayerDetails.module.css";

const PlayerDetails = () => {
    const routeParams = useParams();
    const activeTeam = useSelector((state) => state.teams.teams[state.teams.activeTeam] ? state.teams.teams[state.teams.activeTeam] : (Math.random()*(7-0)+0) );
    const activePlayer = activeTeam.playing11[routeParams.id]

    return (
        <>
            <div className={classes.PlayerDetailsContainer}>
                <div className={classes.ImageContainer}>
                    <img src={activePlayer.img} alt={activePlayer.name + "image"}/>
                </div>
                <div className={classes.InfoContainer}>
                    <p>Name:  {activePlayer.name}</p>
                    <p>Team Name:  {activeTeam.teamName}</p>
                    <p>Price:  ₹{Math.floor(Math.random()*(18-5)+5)} Cr</p>
                    <p>Status:  Playing</p>
                    <p>Role:  {activePlayer.role}</p>
                </div>
            </div>
        </>
    )
}

>>>>>>> 485024d879c55c014adcd284ff0984111b99229d
export default PlayerDetails