//React
import React from 'react';

//Styled Components
import { PokemonBox } from '../../styles/StyledComponents';


function PokemonBoxComponent(props) {
    return (
        <PokemonBox>
            <p>{props.name}</p>
        </PokemonBox>
    );
}

export default PokemonBoxComponent;
