//React
import React, { useState, useEffect } from 'react'

//Components
import { Title, SubTitle } from '../../styles/StyledComponents'
import SearchInput from '../../components/SearchInput/SearchInput'
import PokemonBox from '../../components/PokemonBox/PokemonBox'
import Spinner from '../../components/Spinner/Spinner'

//Context API
import { usePagination } from '../../contexts/PaginationContext'

//Style
import './Home.scss'

//API
import { getPokemons, getPokemonData, getPokemonSpecies } from '../../services/api'

import { Link } from "react-router-dom";


function Home(props, { history }) {
    const [pokemons, setPokemons] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTimeout, setSearchTimeout] = useState(null)
    const {
        nextPage, previousPage, currentPage, setNextPage, setPreviousPage, setCurrentPage
    } = usePagination()

    useEffect(() => {
        async function handleFetchPokemons() {
            setIsLoading(true)
            await fetchPokemons(props.match.params.id);
            setIsLoading(false)
        }

        handleFetchPokemons()
    }, [])

    const fetchPokemons = async (pokemon = '', params = null) => {
        try {
            const pokemonsList = await getPokemons(pokemon, params);

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

    const searchPokemons = (search) => {
        if (typeof search === 'string') {
            search = search.toLocaleLowerCase()
        }

        window.clearTimeout(searchTimeout)

        setSearchTimeout(window.setTimeout(async () => {
            setIsLoading(true)
            await fetchPokemons(search)
            setIsLoading(false)
        }, 700));
    }

    const handleNextPage = async () => {
        setIsLoading(true)
        const url = new URL(nextPage);
        const offset = url.searchParams.get("offset");
        const limit = url.searchParams.get("limit");

        await fetchPokemons('', { offset, limit })

        setIsLoading(false)
    }

    const handlePreviousPage = async () => {
        setIsLoading(true)
        const url = new URL(previousPage);
        const offset = url.searchParams.get("offset");
        const limit = url.searchParams.get("limit");

        await fetchPokemons('', { offset, limit })

        setIsLoading(false)
    }

    const listRender = () => {
        if (isLoading) {
            return (
                <div className="Home__SpinnerLoading">
                    <Spinner />
                </div>
            )
        }

        if (!pokemons) return null

        if (pokemons && pokemons.length === 0) {
            return (<p>No results</p>)
        }

        let pokemonsArray = []

        pokemons.map((pokemon, index) => {
            pokemonsArray.push(<Link to={`/about/${pokemon.id}`}><PokemonBox {...pokemon} key={index}></PokemonBox></Link>)
        })

        return pokemonsArray
    }

    return (
        <section className="Home">
            <Title fontSize={32}>Pokédex</Title>

            <SubTitle fontSize={16}>Search for Pokémon by name or using the National Pokédex number.</SubTitle>

            <SearchInput handleSearch={(val) => { searchPokemons(val) }} />

            <div className={`Home__PokemonList ${isLoading ? 'Home__PokemonList--isLoading' : ''}`}>
                {
                    listRender()
                }
            </div>

            <div className="Home__Actions">
                <button className={`Button Button--${previousPage ? 'active' : 'disabled'}`} onClick={() => handlePreviousPage()}>Previous Page</button>
                <button className={`Button Button--${nextPage ? 'active' : 'disabled'}`} onClick={() => handleNextPage()}>Next Page</button>
            </div>

            <p className="Home__By">Made By Mikael Gallucci</p>
        </section>
    )
}

export default Home