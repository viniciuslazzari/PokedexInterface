import { InputModelStyle } from "./style";

interface InputModelProps {
    label: string;
    children: React.ReactNode;
}

const InputModel = (props: InputModelProps) => {
    return (
        <InputModelStyle>
            <p>{props.label}</p>
            {props.children}
        </InputModelStyle>
    )
}

export default InputModel;