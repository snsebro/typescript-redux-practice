import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../actionTypes/index'
import { Action } from '../actions/index'

export const searchAsteroids = (start_date: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_ASTEROIDS
        })

        try {
           const { data } = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
           const mostRecent = Object.keys(data.near_earth_objects)[0]
           
           const returnData = data.near_earth_objects[mostRecent][0].name
           
           dispatch({
               type: ActionType.SEARCH_ASTEROIDS_SUCCESS,
               payload: returnData
           })

           return returnData
        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_ASTEROIDS_ERROR,
                payload: error.message
            })
        }
    };
};
