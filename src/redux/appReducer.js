import { jokeAPI } from '../api/api';

export const appReducer = (state={joke: {}}, action) => {
    if (action.type === 'SET_STATE') {
        return {
            ...state,
            ...action.initialState
        }
    }
    if (action.type === 'SET_CATEGORIES') {
        return {
            ...state,
            jokeCategories: action.categories
        }
    }
    if (action.type === 'SET_JOKE') {
         return {
             ...state,
             joke: action.joke
         }
    }
    return state
}

const setStateAC = (initialState) => ({type: 'SET_STATE', initialState})
const setCategoriesAC = (categories) => ({type: 'SET_CATEGORIES', categories})
const setJokeAC = (joke) => ({type: 'SET_JOKE', joke})

export const setInitialState = () => {
    return async dispatch => {
        let data = await jokeAPI.getInitialData()
        dispatch(setStateAC(data))
    }
}

export const setCategories = () => {
    return async dispatch => {
        let data = await jokeAPI.getCategories()
        dispatch(setCategoriesAC(data))
    }
}

export const setJoke = (category) => {
    return async dispatch => {
        let data = await jokeAPI.getJoke(category)
        dispatch(setJokeAC(data))
    }
}
