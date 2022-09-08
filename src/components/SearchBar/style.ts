import styled from 'styled-components'
import { Black_2 } from '../../config/colors';

export const SearchBarWrapper = styled.div`
    display: flex;
    width: 800px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    overflow: hidden;
    background: ${Black_2};
    padding: 15px 0px;
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;

    input {
        color: white;
        cursor: pointer;
    }

    :hover{
        transition: 0.3s;
        border-color: black;
        background: none;
    }
`;

export const SearchIcon = styled.div`
    background: none; 
    flex-basis: 10%;
    display: flex;
    justify-content: center;
`;

export const SearchBarInput = styled.input`
    background: none;
    outline: none;
    border: none;
    width: 100%;
`;