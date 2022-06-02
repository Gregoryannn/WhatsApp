import React from 'react'
import { Searchbar, SearchContainer, SearchInput, SearchOutlinedIcon } from './StyledSidebarElements';

const Search = () => {
    return (
        <Searchbar>
            <SearchContainer>
                <SearchOutlinedIcon />
                <SearchInput
                    placeholder="Search or start new chat"
                    type="text"
                />
            </SearchContainer>
        </Searchbar>
    );
}

export default Search;