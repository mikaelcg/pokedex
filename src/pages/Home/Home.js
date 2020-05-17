//React
import React, { useState, useEffect } from 'react'

//Components
import { Title, SubTitle } from '../../styles/StyledComponents';
import SearchInput from '../../components/SearchInput/SearchInput';
import PokemonBox from '../../components/PokemonBox/PokemonBox'

//Style
import './Home.scss'


function Home() {
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        const fetchAllPokemons = async () => {
            try {
                const ajaxConfig = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
                };

                const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/", ajaxConfig)

                const pokemonsJson = await pokemons.json()

                console.log(pokemonsJson)

                setPokemons(pokemonsJson)
            } catch (e) {
                console.error(e)
            }
        }

        fetchAllPokemons()
    }, [])

    return (
        <section className="Home">
            <Title fontSize={32}>Pokédex</Title>

            <SubTitle fontSize={16}>Search for Pokémon by name or using the National Pokédex number.</SubTitle>

            <SearchInput />

            <div className="Home__PokemonList">

                {
                    pokemons.results && pokemons.results.length > 0 ?
                        pokemons.results.map(pokemon => {
                            return <PokemonBox name={pokemon.name}></PokemonBox>
                        }) : null
                }

            </div>
        </section>
    )
}

export default Home