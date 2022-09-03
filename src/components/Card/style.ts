import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 290px;
    width: 300px;
`;

export const CardStyle = styled.div`
    background: #222528;
    border-radius: 25px;
    height: 210px;
    width: 270px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    h1 {
        color: white;
        font-size: 18px;
    }

    img {
        position: relative;
        bottom: 45px;
        left: 95px;
        width: 85px;
    }

    span {
        color: grey;
        font-weight: 300;
    }

    p:nth-child(2) {
        color: #CACACA;
        font-weight: 300;
    }
`;

export const CardInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
    position: relative;
    bottom: 20px;
`;

export const Badge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    border-radius: 10px;

    p {
        color: white;
    }
`;

export const BadgeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;