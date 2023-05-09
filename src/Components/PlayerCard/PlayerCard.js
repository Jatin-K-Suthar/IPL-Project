import React from 'react'
import classes from './PlayerCard.module.css';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player, id }) => {
    console.log(player, id)
    return (
        <>
            <Link to={`/player/${id}`}>
                <div className={classes.ImageContainer}>
                    <img src={player.img} alt={player.name}/>
                </div>
                <div className={classes.InfoContainer}>
                </div>
            </Link>
        </>
    )
}

export default PlayerCard;