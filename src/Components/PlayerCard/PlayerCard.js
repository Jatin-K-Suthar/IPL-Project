import React from 'react'
import classes from './PlayerCard.module.css';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player, id }) => {
    console.log(player, id)
    return (
        <>
            <Link to={`/player/${id}`}>
                <div className={classes.ImageContainer}>
                    <img src={player.img} key={id}/>
                </div>
                <div className={classes.InfoContainer}>
                </div>
            </Link>
        </>
    )
}

export default PlayerCard;
