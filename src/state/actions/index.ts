import { ActionType } from '../actionTypes/index'

interface SearchAction {
    type: ActionType.SEARCH_ASTEROIDS;
}

interface SearchSuccessAction {
    type: ActionType.SEARCH_ASTEROIDS_SUCCESS;
    payload: string[];
}

interface SearchErrorAction {
    type: ActionType.SEARCH_ASTEROIDS_ERROR;
    payload: string;
} 

export type Action = SearchAction | SearchSuccessAction | SearchErrorAction