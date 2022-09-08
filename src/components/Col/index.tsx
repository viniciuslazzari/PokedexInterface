import { ColStyled } from "./style";

interface ColProps {
    ratio: number;
    children: React.ReactNode;
};

const Col = (props: ColProps) => {
    return (
        <ColStyled ratio={props.ratio}>
            {props.children}
        </ColStyled>
    )
}

export default Col;