import styled from 'styled-components'

export const TopBarContainer = styled.div`
    background: #222528;
    width: 100%;
    height: 70px;
`;

export const TopBarStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    height: 100%;
    margin: 0 auto 0 auto;
    justify-content: space-between;
`;

export const MidSectionIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    p {
        color: white;
        margin-left: 15px;
    }
`;

export const TopBarButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #0C85FF;
    width: 120px;
    height: 48px;
    border-radius: 20px;
    border: none;
    
    p {
        margin-left: 10px;
        font-weight: 600;
        font-size: 16px;
    }
`;