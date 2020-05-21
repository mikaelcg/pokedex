//React
import React from 'react'

//Styled Components
import { PokemonBox } from '../../styles/StyledComponents';

function PokemonBoxComponent(props) {
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

    const renderPokemonBox = () => {
        if (!props) return null

        return (
            <PokemonBox bgColor={getPokemonColor(props.color.name)}>
                <p>{props.name}</p>

                <img src={props.sprites.front_default}></img>
            </PokemonBox>
        )
    }

    return (
        <>
            {
                renderPokemonBox()
            }
        </>
    );
}

export default PokemonBoxComponent;
