interface AsteroidsState {
    loading: boolean;
    error: string | null;
    data: string[];
}

interface SearchAction {
    type: 'search_asteroids';
}

interface SearchSuccessAction {
    type: 'search_asteroids_success';
    payload: string[];
}

interface SearchErrorAction {
    type: 'search_asteroids_error';
    payload: string;
}

const reducer = (
    state: AsteroidsState, 
    action: SearchAction | SearchSuccessAction | SearchErrorAction
): AsteroidsState => {
    switch (action.type) {
        case 'search_asteroids':
            return {loading: true, error: null, data: []};
        case 'search_asteroids_success':
            return {loading: false, error: null, data: action.payload};
        case 'search_asteroids_error':
            return{loading: false, error: action.payload, data: []};
        default:
            return state;
    }
};

export default reducer;