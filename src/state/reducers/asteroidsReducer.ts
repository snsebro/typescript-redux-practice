import { Action } from '../actions/index'
import { ActionType } from '../actionTypes/index'

interface AsteroidsState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (
    state: AsteroidsState, 
    action: Action
): AsteroidsState => {
    switch (action.type) {
        case ActionType.SEARCH_ASTEROIDS:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_ASTEROIDS_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_ASTEROIDS_ERROR:
            return{loading: false, error: action.payload, data: []};
        default:
            return state;
    }
};

export default reducer;