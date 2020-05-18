//React
import React from 'react';

//Styled Components
import { InputComponent } from '../../styles/StyledComponents';

//Icons
import { MdSearch } from 'react-icons/md';

function SearchInput(props) {


    return (
        <InputComponent>
            <MdSearch />
            <input placeholder="What Pokémon are you looking for?" onChange={e => props.handleSearch(e.target.value)}></input>
        </InputComponent>
    );
}

export default SearchInput;
