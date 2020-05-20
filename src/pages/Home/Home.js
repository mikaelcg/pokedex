//React
import React, { useState, useEffect } from 'react'

//Components
import { Title, SubTitle } from '../../styles/StyledComponents';
import SearchInput from '../../components/SearchInput/SearchInput';
import PokemonBox from '../../components/PokemonBox/PokemonBox'

//Style
import './Home.scss'

//API
import { getPokemons } from '../../services/api';


function Home(props) {
    let [pokemons, setPokemons] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [nextPage, setNextPage] = useState(null)
    let [previousPage, setPreviousPage] = useState(null)

    useEffect(() => {
        fetchPokemons(props.match.params.id);
    }, [])

    const fetchPokemons = async (id) => {
        try {
            const pokemonData = await getPokemons(id);

            setPokemons(pokemonData.results);
            setNextPage(pokemonData.next);
            setPreviousPage(pokemonData.previous);
        } catch (error) {
            alert(error)
        }
    }

    const fetchAllPokemons = async () => {
        // try {
        //     const ajaxConfig = {
        //         method: 'GET',
        //         mode: 'cors',
        //         cache: 'default'
        //     };

        //     const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/`, ajaxConfig)

        //     const pokemonsJson = await pokemons.json()

        //     pokemonsJson.results.forEach(pokemon => {
        //         fetchPokemonData(pokemon)
        //     })

        //     setNextPage(pokemonsJson.next)
        //     setPreviousPage(pokemonsJson.previous)
        // } catch (e) {
        //     console.error(e)
        // }
    }

    const fetchPokemon = async (pokemon = ``) => {
        // let pokemonAux = pokemon

        // try {

        //     const ajaxConfig = {
        //         method: 'GET',
        //         mode: 'cors',
        //         cache: 'default'
        //     };

        //     const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAux}`, ajaxConfig)

        //     const pokemonJson = await pokemon.json()

        //     setPokemons([pokemonJson])

        //     return
        // } catch (e) {
        //     return console.error(e)
        // }
    }

    const fetchPokemonData = async (pokemonAux) => {
        // try {
        //     const ajaxConfig = {
        //         method: 'GET',
        //         mode: 'cors',
        //         cache: 'default'
        //     };

        //     const pokemon = await fetch(pokemonAux.url, ajaxConfig)

        //     const pokemonJson = await pokemon.json()

        //     const pokemonSpecies = await fetch(pokemonJson.species.url, ajaxConfig)

        //     const pokemonSpeciesJson = await pokemonSpecies.json()

        //     let pokemonArray = []

        //     pokemonArray.push({ ...pokemonJson, ...pokemonSpeciesJson })

        //     setPokemons(pokemonArray)
        // } catch (e) {
        //     console.error(e)
        // }
    }

    const listRender = () => {
        if (!pokemons) return null

        let pokemonsArray = []

        pokemons.map((pokemon, index) => {
            pokemonsArray.push(<PokemonBox {...pokemon} key={index}></PokemonBox>)
        })

        return pokemonsArray

        // if (isLoading) {
        //     return (<p>Loading</p>)
        // }

        // if (pokemons && pokemons.length === 0) {
        //     return (<p>No results</p>)
        // }

        // let array = []

        // if (pokemons) {
        //     pokemons.map((pokemon, index) => {
        //         array.push(<PokemonBox pokemon={pokemon} key={index}></PokemonBox>)
        //     })
        // }

        // return array
    }

    return (
        <section className="Home">
            <Title fontSize={32}>Pokédex</Title>

            <SubTitle fontSize={16}>Search for Pokémon by name or using the National Pokédex number.</SubTitle>

            <SearchInput handleSearch={(val) => { console.log(val) }} />
            {/* <SearchInput handleSearch={(val) => { fetchPokemon(val) }} /> */}

            <div className="Home__PokemonList">
                {
                    listRender()
                }
            </div>
        </section>
    )
}

export default Home