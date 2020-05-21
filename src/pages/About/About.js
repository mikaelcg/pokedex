//React
import React, { useState, useEffect } from 'react'

//Components
import { AboutHeader, AboutTitle } from '../../styles/StyledComponents'
import PokemonBoxInfo from '../../components/PokemonBoxInfo/PokemonBoxInfo'
import PokemonStat from '../../components/PokemonStat/PokemonStat'

//API
import { getPokemons, getPokemonSpecies } from '../../services/api'

//Scss
import './About.scss'
import '../../styles/reset.scss'

function About(props) {
    const [pokemon, setPokemon] = useState(false)

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const pokemonAux = await getPokemons(props.match.params.id, null);
                const pokemonSpecies = await getPokemonSpecies(pokemonAux.species.url)
                setPokemon({ ...pokemonAux, ...pokemonSpecies });

            } catch (error) {
                console.error(error)
            }
        }

        fetchPokemonData()
    }, [])

    const getPokemonColor = (color) => {
        if (!color) return 'black'

        if (color === 'green') return `#8BBE8A`;

        if (color === 'red') return `#FFA756`;

        if (color === 'blue') return `#58ABF6`;

        if (color === 'white') {
            return `#EDEEF0`
        }

        if (color === 'purple') {
            return `#F2ECF1`
        }

        if (color === 'yellow') {
            return `#F2CB55`
        }

        if (color === 'brown') {
            return `#F78551`
        }

        if (color === 'pink') {
            return `#EBA8C3`
        }

        return color
    }

    const renderBaseStats = () => {
        const statsArray = pokemon.stats.map(stat => {
            return <PokemonStat {...stat}></PokemonStat>
        })

        return (<div className="About__Block">{statsArray}</div>)
    }

    const renderAbilities = () => {
        const abilitiesArray = pokemon.abilities.map((ability, index) => {
            return <p className="About__Ability">{`${index + 1}. ${ability.ability.name}`}</p>
        })

        return abilitiesArray
    }

    const renderPokemonData = () => {
        if (!pokemon) return null

        return (
            <>
                <AboutHeader bgColor={getPokemonColor(pokemon.color.name)}>
                    <div className="About__Header">
                        <div>
                            <img src={pokemon.sprites.front_default}></img>
                            <PokemonBoxInfo {...pokemon}></PokemonBoxInfo>
                        </div>
                    </div>
                </AboutHeader>

                <div className="About__Content">
                    <AboutTitle color={getPokemonColor(pokemon.color.name)}>
                        Base Stats
                    </AboutTitle>

                    {
                        renderBaseStats()
                    }

                    <AboutTitle color={getPokemonColor(pokemon.color.name)}>
                        Abilities
                    </AboutTitle>

                    {
                        renderAbilities()
                    }
                </div>
            </>
        );
    }

    return (
        <section className="About">
            {
                renderPokemonData()
            }
        </section>
    )
}

export default About