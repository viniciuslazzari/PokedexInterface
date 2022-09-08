import styled from "styled-components";

interface ButtonStyleProps {
    color: string;
}

export const ButtonStyle = styled.button.attrs((props: ButtonStyleProps) => props)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${props => props.color};
    width: 100%;
    height: 48px;
    border-radius: 20px;
    border: none;
    
    p {
        margin-left: 10px;
        margin-right: 22px;
        font-size: 16px;
        color: white;
    }

    :focus {
        border: 2px solid red;
    }
`;