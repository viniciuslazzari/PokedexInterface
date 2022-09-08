import { Black_1, Black_2, Grey_1 } from "../../../config/colors";
import Select from "react-select";
import { MultiSelectInputStyle } from "./style";

interface MultiSelectInputProps {
    label: string;
    name: string;
    options: { value: number; label: string; }[];
    onChange: Function;
}

const MultiSelectInput = (props: MultiSelectInputProps) => {
    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            background: Black_2,
            border: 'none',
            borderRadius: 12,
            padding: 6,
            borderColor: state.isSelected ? Black_1 : Black_2,
        }),

        input: (provided: any) => ({
            ...provided,
            color: Grey_1
        }),

        menu: (provided: any) => ({
            ...provided,
            background: Black_2
        }),

        placeholder: (provided: any) => ({
            ...provided,
            color: Grey_1,
            fontSize: 14
        }),

        multiValue: (provided: any) => ({
            ...provided,
            background: Grey_1,
            borderRadius: 8,
        }),

        multiValueLabel: (provided: any) => ({
            ...provided,
            padding: 6,
            paddingLeft: 12
        }),

        indicatorSeparator: (provided: any) => ({
            ...provided,
            background: Grey_1,
        }),

        option: (provided: any, state: any) => ({
            ...provided,
            background: state.isFocused ? Black_1 : Black_2,
            color: Grey_1
        })
    }

    return (
        <MultiSelectInputStyle>
            <p>{props.label}</p>
            <Select 
                name={props.name} 
                styles={customStyles} 
                options={props.options} 
                isMulti
                onChange={e => props.onChange(e)} 
            />
        </MultiSelectInputStyle>
    )
}

export default MultiSelectInput;