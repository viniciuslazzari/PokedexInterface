import { TextInputStyle } from "./style";

interface TextInputProps {
    label: string;
    name: string;
    onChange: Function;
}

const TextInput = (props: TextInputProps) => {
    return (
        <TextInputStyle>
            <p>{props.label}</p>
            <input name={props.name} type="text" onChange={e => props.onChange(e)} />
        </TextInputStyle>
    )
}

export default TextInput;