import { RowStyled } from "./style";

interface RowProps {
    children: React.ReactNode;
    margin?: number;
    justify?: string;
};

const Row = (props: RowProps) => {
    return (
        <RowStyled margin={props.margin} justify={props.justify} >
            {props.children}
        </RowStyled>
    )
}

export default Row;