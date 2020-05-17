//React
import React from 'react'

//Components
import { Title, SubTitle, PokemonBox } from '../../styles/StyledComponents';
import SearchInput from '../../components/SearchInput/SearchInput';

//Style
import './Home.scss'


function Home() {
    return (
        <section className="Home">
            <div className="Home__Header">
                <Title fontSize={32}>Pokédex</Title>

                <SubTitle fontSize={16}>Search for Pokémon by name or using the National Pokédex number.</SubTitle>

                <SearchInput>
                </SearchInput>
            </div>

            <div className="Home__PokemonList">
                <PokemonBox />
                <PokemonBox />
                <PokemonBox />
                <PokemonBox />
                <PokemonBox />
            </div>
        </section>
    )
}

export default Home