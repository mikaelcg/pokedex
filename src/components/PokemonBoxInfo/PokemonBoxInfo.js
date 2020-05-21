//React
import React from 'react'

//Styled Components
import { PokemonBoxInfo } from '../../styles/StyledComponents';

function PokemonBoxInfoComponent(props) {
    const getPokemonNumber = (id) => {
        if (id.toString().length === 1) {
            id = `00${id}`
        }

        if (id.toString().length === 2) {
            id = `0${id}`
        }

        return id
    }

    const getPokemonTypes = (types) => {
        const typesArray = types.map((type, index) => {
            return (
                <div key={index} className={`Type Type--${type.type.name}`}>
                    <p>
                        {type.type.name}
                    </p>
                </div>
            )
        })

        return typesArray
    }

    const renderPokemonBoxInfo = () => {
        if (!props) return null

        return (
            <>
                <PokemonBoxInfo>
                    <p className="Number">#{getPokemonNumber(props.id)}</p>

                    <p className="Name">{props.name}</p>

                    <div className="Types">
                        {getPokemonTypes(props.types)}
                    </div>
                </PokemonBoxInfo>
            </>
        )
    }

    return (
        <>
            {
                renderPokemonBoxInfo()
            }
        </>
    );
}

export default PokemonBoxInfoComponent;
