import { FileInputStyle } from "./style";
import { File } from "react-feather"; 
import { Grey_1 } from "../../../config/colors";

interface FileInputProps {
    label: string;
    name: string;
    onChange: Function;
}

const FileInput = (props: FileInputProps) => {
    return (
        <FileInputStyle>
            <p>{props.label}</p>
            <label className="fileCustom">
                <File style={{ color: Grey_1 }} />
                <p>Chose file...</p>
                <input name={props.name} type="file" onChange={e => props.onChange(e)} />
            </label>
        </FileInputStyle>
    )
}

export default FileInput;