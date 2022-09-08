import { NumberInputStyle } from "./style";

interface NumberInputProps {
    label: string;
    name: string;
    onChange: Function;
}

const NumberInput = (props: NumberInputProps) => {
    return (
        <NumberInputStyle>
            <p>{props.label}</p>
            <input name={props.name} type="number" onChange={e => props.onChange(e)} />
        </NumberInputStyle>
    )
}

export default NumberInput;