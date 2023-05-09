import React, { useState} from 'react';
import Card from '../Cards/Card';
import { useSelector } from "react-redux";
import classes from "./CardSection.module.css";

function CardSection() {
    const teams = useSelector((state) => {
        return state.teams.teams;
    });

    let [filteredResults, setFilteredResults] = useState(teams);

    const handleTeamSearch = (e) => {
        filteredResults = teams.filter((team) =>
            team.teamName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredResults(filteredResults);
    };

    return (
        <>
            <input className={classes.SearchContainer} placeholder='Search Teams' onChange={handleTeamSearch} />
            <div className={classes.CardContainer}>
                {filteredResults.map((team, index) => {
                    return <Card key={index} id={index} team={team} />;
                })}
            </div></>
    )
}

export default CardSection;