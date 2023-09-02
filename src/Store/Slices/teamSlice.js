import { createSlice } from "@reduxjs/toolkit";
import teams from "../../Utils/TeamData";

const initialState = {
    teams: teams,
    players: teams
        .map((team) => team.playing11)
        .flat(1)
};

export const teamSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        addTeams(state, action) {
            state.teams.push(action.payload);
        },
        addPlayer(state, action) {
            state.players.push(action.payload);
        },
        setActiveTeam(state, action) {
            state.activeTeam = action.payload;
        }
    }
});

export const { addTeams, addPlayer, setActiveTeam } = teamSlice.actions;

export default teamSlice.reducer;
