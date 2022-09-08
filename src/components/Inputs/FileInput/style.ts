import styled from 'styled-components';
import { Black_2, Grey_1 } from '../../../config/colors';

export const FileInputStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    
    p {
        color: ${Grey_1};
        margin-bottom: 15px;
        font-size: 14px;
    }

    .fileCustom {
        display: flex;
        align-items: center;
        background: ${Black_2};
        padding: 15px 15px;
        border: 2px solid ${Black_2};
        border-radius: 12px;
        overflow: hidden;

        p {
            margin-bottom: 0px;
            color: ${Grey_1};
            margin-left: 15px;
        };
    }

    input {
        display: none;
    }
`;