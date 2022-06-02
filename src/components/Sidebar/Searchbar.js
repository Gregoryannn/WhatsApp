import React from 'react'
import { SearchbarWrap, SearchContainer, SearchInput, SearchOutlinedIcon } from './StyledSidebarElements';

const Searchbar = () => {
    return (
        <SearchbarWrap>
            <SearchContainer>
                <SearchOutlinedIcon />
                <SearchInput
                    placeholder="Search or start new chat"
                    type="text"
                />
            </SearchContainer>
        </SearchbarWrap>
    );
}

export default Searchbar;
