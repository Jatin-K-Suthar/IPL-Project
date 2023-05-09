import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from '../Store/Slices/teamSlice';

const store = configureStore({
    reducer: {
        teams: teamsReducer
    }
});

export default store;
