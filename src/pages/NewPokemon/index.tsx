import NumberInput from "../../components/Inputs/NumberInput";
import Row from "../../components/Row";
import TextInput from "../../components/Inputs/TextInput";
import { FormContainer } from "./style";
import Col from "../../components/Col";
import Button from "../../components/Button";
import InputModel from "../../components/Inputs/InputModel";
import { Check } from "react-feather";
import TextArea from "../../components/Inputs/TextAreaInput";
import FileInput from "../../components/Inputs/FileInput";
import { Black_2, Grey_1, PrimaryBlue } from "../../config/colors";
import MultiSelectInput from "../../components/Inputs/MultiSelectInput";
import { useState } from "react";

const initialFormData = Object.freeze({
    id: 0 as number,
    name: "" as string,
    weight: 0 as number,
    size: 0 as number,
    gender: 0 as number,
    types: [] as number[],
    history: "" as string,
    image: null as unknown
});

const NewPokemon = () => {
    const [formData, updateFormData] = useState(initialFormData);
    const [genderButtonSelected, updateGenderButtonSelected] = useState(0);

    const handleChange = (e: any) => {
        updateFormData({
          ...formData,
    
          [e.target.name]: e.target.value.trim()
        });
    };

    const handleMultiSelectChange = (array: { value: number; label: string; }[]) => {
        updateFormData({
            ...formData,
            types: array.map(e => {return e.value})
        });
    };

    const handleGenderChange = (newGender: number) => {
        updateFormData({
            ...formData,
            gender: newGender
        });

        updateGenderButtonSelected(newGender);
    }

    const handleSumbit = () => {
        console.log(formData);
    }

    const options = [
        { value: 1, label: 'Chocolate' },
        { value: 2, label: 'Strawberry' },
        { value: 3, label: 'Vanilla' }
    ]

    return (
        <>
            <FormContainer>
                <Row>
                    <h1>New pokemon</h1>
                </Row>

                <form onSubmit={(e) => {e.preventDefault()}}>
                    <Row margin={50}>
                        <Col ratio={47}>
                            <NumberInput name="id" label="Id" onChange={handleChange} />
                        </Col>
                        <Col ratio={47}>
                            <TextInput name="name" label="Name" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col ratio={47}>
                            <NumberInput name="weight" label="Weight" onChange={handleChange} />
                        </Col>
                        <Col ratio={47}>
                            <NumberInput name="size" label="Size" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col ratio={47}>
                            <InputModel label="Gender">
                                <Row margin={0}>
                                    <Col ratio={47}>
                                        <Button 
                                            onClick={() => handleGenderChange(1)} 
                                            color={Black_2}
                                            style={{ 
                                                border: '2px solid', 
                                                borderColor: genderButtonSelected === 1 ? Grey_1 : Black_2 }
                                            } 
                                        >
                                            <i style={{ marginLeft: 14, color: "white" }} className="fas fa-venus"></i>
                                            <p style={{ marginBottom: "0px" }}>Male</p>
                                        </Button>
                                    </Col>
                                    <Col ratio={47}>
                                        <Button 
                                            onClick={() => handleGenderChange(2)} 
                                            color={Black_2} 
                                            style={{ 
                                                border: '2px solid', 
                                                borderColor: genderButtonSelected === 2 ? Grey_1 : Black_2 }
                                            } 
                                        >
                                            <i style={{ marginLeft: 14, color: "white" }} className="fas fa-mars"></i>
                                            <p style={{ marginBottom: "0px" }}>Female</p>
                                        </Button>
                                    </Col> 
                                </Row>
                            </InputModel>
                        </Col>

                        <Col ratio={47}>
                            <MultiSelectInput name="types" label="Types" options={options} onChange={handleMultiSelectChange} />
                        </Col>
                    </Row>

                    <Row>
                        <Col ratio={47}>
                            <TextArea name="history" label="History" onChange={handleChange} />
                        </Col>
                        <Col ratio={47}>
                            <FileInput name="image" label="Image" onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row margin={50} justify="flex-end">
                        <Col ratio={15}>
                            <Button onClick={handleSumbit} color={PrimaryBlue}>
                                <Check style={{ marginLeft: 14, color: "white" }} />
                                <p>Sumbit</p>
                            </Button>
                        </Col>
                    </Row>
                </form>
            </FormContainer>
        </>
    )
}

export default NewPokemon;