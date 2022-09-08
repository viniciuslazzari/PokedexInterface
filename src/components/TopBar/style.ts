import styled from 'styled-components'
import { Black_2 } from "../../config/colors";

export const TopBarContainer = styled.div`
    background: ${Black_2};
    width: 100%;
    height: 70px;
`;

export const TopBarStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    height: 100%;
    margin: 0 auto 0 auto;
    justify-content: space-between;
`;

export const MidSectionIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    p {
        color: white;
        margin-left: 15px;
    }
`;