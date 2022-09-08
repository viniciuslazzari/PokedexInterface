import styled from "styled-components";

interface ColStyledProps {
    ratio: number;
}

export const ColStyled = styled.div.attrs((props: ColStyledProps) => props)`
    flex-basis: ${props => props.ratio}%;

    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;