import { TextAreaInputStyle } from "./style";

interface TextAreaInputProps {
    label: string;
    name: string;
    onChange: Function;
}

const TextArea = (props: TextAreaInputProps) => {
    return (
        <TextAreaInputStyle>
            <p>{props.label}</p>
            <textarea name={props.name} onChange={e => props.onChange(e)} />
        </TextAreaInputStyle>
    )
}

export default TextArea;