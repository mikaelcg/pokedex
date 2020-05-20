import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const api = axios.create({
    baseURL,
});

export function getPokemons(params = '') {
    return api.get(`pokemon/${params}`).then(response => response.data);
}
