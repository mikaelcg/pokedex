//React
import React, { useState, useEffect } from 'react'

//Components
import { Title, SubTitle } from '../../styles/StyledComponents';
import SearchInput from '../../components/SearchInput/SearchInput';
import PokemonBox from '../../components/PokemonBox/PokemonBox'

//Style
import './Home.scss'

//API
import { getPokemons, getPokemonData, getPokemonSpecies } from '../../services/api';


function Home(props) {
    let [pokemons, setPokemons] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [nextPage, setNextPage] = useState(null)
    let [previousPage, setPreviousPage] = useState(null)
    let [searchTimeout, setSearchTimeout] = useState(null)

    useEffect(() => {
        async function fetchAllPokemons() {
            setIsLoading(true)
            await fetchPokemons(props.match.params.id);
            setIsLoading(false)
        }

        fetchAllPokemons()
    }, [])

    const fetchPokemons = async (pokemon = '') => {
        try {
            const pokemonsList = await getPokemons(pokemon);

            if (pokemon !== '') {
                const pokemonSpecies = await getPokemonSpecies(pokemonsList.species.url)
                setPokemons([{ ...pokemonsList, ...pokemonSpecies }]);
            } else {
                const pokemons = await fetchPokemonData(pokemonsList)

                setPokemons(pokemons)
                setNextPage(pokemonsList.next);
                setPreviousPage(pokemonsList.previous);
            }
        } catch (error) {
            setPokemons([]);
            console.error(error)
        }
    }

    const fetchPokemonData = async (pokemonsList) => {
        try {
            const pokemons = await Promise.all(pokemonsList.results.map(async pokemon => {
                const pokemonData = await getPokemonData(pokemon.url)
                const pokemonSpecies = await getPokemonSpecies(pokemonData.species.url)
                return { ...pokemonData, ...pokemonSpecies }
            }))

            return pokemons
        } catch (e) {
            console.error(e)
        }
    }

    const listRender = () => {
        if (isLoading) {
            return (<p>Loading</p>)
        }

        if (!pokemons) return null

        if (pokemons && pokemons.length === 0) {
            return (<p>No results</p>)
        }

        let pokemonsArray = []

        pokemons.map((pokemon, index) => {
            pokemonsArray.push(<PokemonBox {...pokemon} key={index}></PokemonBox>)
        })

        return pokemonsArray
    }

    const searchPokemons = (search) => {
        window.clearTimeout(searchTimeout)

        setSearchTimeout(window.setTimeout(async () => {
            setIsLoading(true)
            await fetchPokemons(search)
            setIsLoading(false)
        }, 700));
    }

    return (
        <section className="Home">
            <Title fontSize={32}>Pokédex</Title>

            <SubTitle fontSize={16}>Search for Pokémon by name or using the National Pokédex number.</SubTitle>

            <SearchInput handleSearch={(val) => { searchPokemons(val) }} />

            <div className="Home__PokemonList">
                {
                    listRender()
                }
            </div>
        </section>
    )
}

export default Home