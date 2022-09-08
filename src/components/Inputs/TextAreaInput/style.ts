import styled from 'styled-components';
import { Black_2, Grey_1, PrimaryBlue } from '../../../config/colors';

export const TextAreaInputStyle = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${Grey_1};
        margin-bottom: 15px;
        font-size: 14px;
    }

    textarea {
        background: ${Black_2};
        padding: 15px 15px;
        border: 2px solid ${Black_2};
        border-radius: 12px;
        color: ${Grey_1};
        resize: none;
        min-height: 4rem;
    }

    textarea:focus {
        outline: none !important;
        border: 2px solid ${PrimaryBlue};
    }
`;