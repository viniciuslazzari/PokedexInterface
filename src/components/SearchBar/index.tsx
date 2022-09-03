import { SearchBarInput, SearchIcon, SearchBarWrapper } from "./style"
import { Search } from 'react-feather';

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <SearchIcon> 
                <Search style={{ height: 20, background: "none", color: "#A7A8A9" }} />
            </SearchIcon>
            <SearchBarInput placeholder="Search by name" />
        </SearchBarWrapper>
    )
}

export default SearchBar