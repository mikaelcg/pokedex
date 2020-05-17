//React
import React from 'react';

//Styled Components
import { InputComponent } from '../../styles/StyledComponents';

//Icons
import { MdSearch } from 'react-icons/md';

function SearchInput() {
    return (
        <InputComponent>
            <MdSearch />
            <input placeholder="What Pokémon are you looking for?"></input>
        </InputComponent>
    );
}

export default SearchInput;
