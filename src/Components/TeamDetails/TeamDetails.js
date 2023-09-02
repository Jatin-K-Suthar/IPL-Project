<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";
import classes from "./TeamDetails.module.css";
import { setActiveTeam } from "../../Store/Slices/teamSlice";

const TeamDetails = () => {
    const routeParams = useParams();
    const activeTeam = useSelector((state) => state.teams.teams[routeParams.id]);
    const dispatch = useDispatch();
    dispatch(setActiveTeam(routeParams.id))

    return (

        <>
            <div className={classes.WrapperContainer}>
                <aside className={classes.AsideContainer}>
                    <img src={activeTeam.teamLogo} alt={activeTeam.teamName + "Logo"}></img>
                    <div className={classes.TeamInfoContainer}>
                        <p><span>Captain</span><hr></hr> {activeTeam.captain}</p>
                        <p><span>Top Batsman</span><hr></hr> {activeTeam.bestBatsman} </p>
                        <p><span>Top Bowler</span><hr></hr> {activeTeam.bestBowler} </p>
                        <p><span>Championship Count</span><hr></hr> {activeTeam.timesWon} </p>
                    </div>
                </aside>
                <section>
                    {activeTeam.playing11.map((player, index) => {
                        return <PlayerCard player={player} key={index} id={index}/>
                    })}
                </section>
            </div>
        </>
    );
};

export default TeamDetails;
=======
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";
import classes from "./TeamDetails.module.css";
import { setActiveTeam } from "../../Store/Slices/teamSlice";

const TeamDetails = () => {
    const routeParams = useParams();
    const activeTeam = useSelector((state) => state.teams.teams[routeParams.id]);
    const dispatch = useDispatch();
    dispatch(setActiveTeam(routeParams.id))

    return (

        <>
            <div className={classes.WrapperContainer}>
                <aside className={classes.AsideContainer}>
                    <img src={activeTeam.teamLogo} alt={activeTeam.teamName + "Logo"}></img>
                    <div className={classes.TeamInfoContainer}>
                        <p><span>Captain</span><hr></hr> {activeTeam.captain}</p>
                        <p><span>Top Batsman</span><hr></hr> {activeTeam.bestBatsman} </p>
                        <p><span>Top Bowler</span><hr></hr> {activeTeam.bestBowler} </p>
                        <p><span>Championship Count</span><hr></hr> {activeTeam.timesWon} </p>
                    </div>
                </aside>
                <section>
                    {activeTeam.playing11.map((player, index) => {
                        return <PlayerCard player={player} key={index} id={index}/>
                    })}
                </section>
            </div>
        </>
    );
};

export default TeamDetails;
>>>>>>> 485024d879c55c014adcd284ff0984111b99229d
