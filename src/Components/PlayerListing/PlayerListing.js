<<<<<<< HEAD
import { useSelector } from "react-redux";
import { useState } from "react";
import classes from "./PlayerListing.module.css";

const PlayerListing = () => {
    const players = useSelector((state) => {
        console.log(state.teams.players.flat(1));
        return state.teams.players.flat(1);
    });
    let [filteredPlayerList, setfilteredPlayerList] = useState(players);

    const handlePlayerSeach = (event) => {
        setfilteredPlayerList(
            players.filter((player) =>
                player.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };

    return (
        <>
            <div className={classes.PlayersContainer}>
                <h2><span>Here's a list of all the players. Search your player!</span></h2>
                <input className={classes.SearchBox} type="text" name="players" placeholder="Search your favourite player!" onChange={handlePlayerSeach} />
                {filteredPlayerList?.map((player, index) => (
                    <li className={classes.Listitems} key={index}>{player.name}</li>
                ))}
            </div>
        </>
    );
};

export default PlayerListing;
=======
import { useSelector } from "react-redux";
import { useState } from "react";
import classes from "./PlayerListing.module.css";

const PlayerListing = () => {
    const players = useSelector((state) => {
        console.log(state.teams.players.flat(1));
        return state.teams.players.flat(1);
    });
    let [filteredPlayerList, setfilteredPlayerList] = useState(players);

    const handlePlayerSeach = (event) => {
        setfilteredPlayerList(
            players.filter((player) =>
                player.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };

    return (
        <>
            <div className={classes.PlayersContainer}>
                <h2><span>Here's a list of all the players. Search your player!</span></h2>
                <input className={classes.SearchBox} type="text" name="players" placeholder="Search your favourite player!" onChange={handlePlayerSeach} />
                {filteredPlayerList?.map((player, index) => (
                    <li className={classes.Listitems} key={index}>{player.name}</li>
                ))}
            </div>
        </>
    );
};

export default PlayerListing;
>>>>>>> 485024d879c55c014adcd284ff0984111b99229d
