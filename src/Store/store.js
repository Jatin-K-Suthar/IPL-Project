<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from '../Store/Slices/teamSlice';

const store = configureStore({
    reducer: {
        teams: teamsReducer
    }
});

export default store;
=======
import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from '../Store/Slices/teamSlice';

const store = configureStore({
    reducer: {
        teams: teamsReducer
    }
});

export default store;
>>>>>>> 485024d879c55c014adcd284ff0984111b99229d
