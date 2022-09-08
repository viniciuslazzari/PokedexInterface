import { ButtonStyle } from "./style";

interface ButtonProps {
    color: string;
    children: React.ReactNode;
    onClick: Function;
    style?: any;
};

const Button = (props: ButtonProps) => {
    return (
        <ButtonStyle onClick={e => props.onClick(e)} color={props.color} style={props.style}>
            {props.children}
        </ButtonStyle>
    )
}

export default Button;