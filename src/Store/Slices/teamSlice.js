<<<<<<< HEAD
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
=======
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
>>>>>>> 485024d879c55c014adcd284ff0984111b99229d
