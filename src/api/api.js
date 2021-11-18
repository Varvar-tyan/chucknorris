import axios from 'axios';

export const jokeAPI = {
    getInitialData() {
        return axios.get('https://api.chucknorris.io/jokes/random').then(resp => resp.data)
    },
    getCategories() {
        return axios.get('https://api.chucknorris.io/jokes/categories').then(resp => resp.data)
    },
    getJoke(category) {
        return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(resp => resp.data)
    }
}