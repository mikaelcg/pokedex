//React
import React, { useState, useEffect } from 'react'

//Components
import { Title, SubTitle } from '../../styles/StyledComponents'
import SearchInput from '../../components/SearchInput/SearchInput'
import PokemonBox from '../../components/PokemonBox/PokemonBox'

//Context API
import { usePagination } from '../../contexts/PaginationContext'

//Style
import './Home.scss'

//API
import { getPokemons, getPokemonData, getPokemonSpecies } from '../../services/api'


function Home(props) {
    const [pokemons, setPokemons] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTimeout, setSearchTimeout] = useState(null)
    const {
        nextPage, previousPage, currentPage, setNextPage, setPreviousPage, setCurrentPage
    } = usePagination()

    useEffect(() => {
        async function fetchAllPokemons() {
            setIsLoading(true)
            await fetchPokemons(props.match.params.id);
            setIsLoading(false)
        }

        fetchAllPokemons()
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

            <button onClick={() => handlePreviousPage()}>Prev</button>
            <button onClick={() => handleNextPage()}>Next</button>
        </section>
    )
}

export default Home