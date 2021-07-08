import { combineReducers } from 'redux';
import reducer from './asteroidsReducer';

const reducers = combineReducers({
    asteroids: reducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>