import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const api = axios.create({
    baseURL,
});

export function getPokemons(params = '') {
    return api.get(`pokemon/${params}`).then(response => response.data);
}

export function getPokemonData(url) {
    return api.get(url).then(response => response.data);
}

export function getPokemonSpecies(url) {
    return api.get(url).then(response => response.data);
}
