<<<<<<< HEAD
import React from 'react';
import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

function Card({ team, id }) {
    return (
            <>
                <Link to={`/teampage/${id}`} id={id}>
                    <div className={classes.CardBody} id={team.teamName}>
                        <img src={team.teamLogo} alt={team.teamName + " logo"} />
                    </div>
                </Link>
            </>
            );
}

export default Card;



=======
import React from 'react';
import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

function Card({ team, id }) {
    return (
            <>
                <Link to={`/teampage/${id}`} id={id}>
                    <div className={classes.CardBody} id={team.teamName}>
                        <img src={team.teamLogo} alt={team.teamName + " logo"} />
                    </div>
                </Link>
            </>
            );
}

export default Card;



>>>>>>> 485024d879c55c014adcd284ff0984111b99229d
