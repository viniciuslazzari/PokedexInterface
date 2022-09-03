import CardLineStyle from "./style"

interface CardLineProps {
    children: React.ReactNode;
};

const CardLine = (props: CardLineProps) => {
    return (
        <CardLineStyle>
            {props.children}
        </CardLineStyle>
    )
}

export default CardLine