import styled from "styled-components";

interface RowStyledProps {
    margin?: number;
    justify?: string;
}

export const RowStyled = styled.div.attrs((props: RowStyledProps) => props)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: ${props => props.justify ? props.justify : "space-between"};
    flex-wrap: wrap;
    margin-top: ${props => props.margin != null ? props.margin : 30}px;
`;