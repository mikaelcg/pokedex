import React from 'react'

//Styled Components
import { PokemonStat } from '../../styles/StyledComponents'

function PokemonStatComponent(props) {
    const formatBaseStatName = (name) => {
        let nameAux = null

        if (name === 'speed') {
            nameAux = 'Speed'
        }

        if (name === 'defense') {
            nameAux = 'Defense'
        }

        if (name === 'attack') {
            nameAux = 'Attack'
        }

        if (name === 'hp') {
            nameAux = 'HP'
        }

        if (name === 'special-defense') {
            nameAux = 'Sp. Def'
        }

        if (name === 'special-attack') {
            nameAux = 'Sp. Atk'
        }

        return nameAux
    }

    return (
        <PokemonStat>
            <span className="Name">{formatBaseStatName(props.stat.name)}</span>
            <span className="BaseStat">{props.base_stat}</span>
        </PokemonStat>
    );
}

export default PokemonStatComponent