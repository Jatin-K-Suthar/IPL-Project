import React from 'react';
import classes from './table.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const TeamTable = () => {
    const teams = useSelector(state => state.teams.teams)
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate(`/teampage/${index}`);
    }

    return (
        <table className={classes.teamTable}>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Team Full Name</th>
                    <th>Players Count</th>
                    <th>Captain</th>
                    <th>Top Batsman</th>
                    <th>Top Bowler</th>
                    <th>Champ Count</th>
                    <th>Represent City</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, index) => (
                    <tr key={team.id} onClick={()=> {
                        (handleClick(index))}
                    }>
                        <td>{team.abbreviation}</td>
                        <td>{team.teamName}</td>
                        <td>{(team.playing11).length}</td>
                        <td>{team.captain}</td>
                        <td>{team.bestBatsman}</td>
                        <td>{team.bestBowler}</td>
                        <td>{team.timesWon}</td>
                        <td>{team.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TeamTable;

// <Link to={`/teampage/${index}`} id={index}>
{/* </Link> */ }
