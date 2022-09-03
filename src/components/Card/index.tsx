import { Badge, BadgeWrapper, CardStyle, CardWrapper, CardInfoWrapper } from "./style"

const Card = () => {
    return (
        <CardWrapper>
            <CardStyle>
                <img src="https://img.pokemondb.net/sprites/diamond-pearl/normal/charizard.png" alt="Charizard" />
                <CardInfoWrapper>
                    <h1>Charmander <span>(006)</span></h1>
                    <p>302kg - 3,24m</p>
                    <BadgeWrapper>
                        <Badge style={{ background:"#FF5733" }}><p>Fire</p></Badge>
                        <Badge style={{ background:"#9A9A9A" }}><p>Flying</p></Badge>
                    </BadgeWrapper>
                </CardInfoWrapper>
            </CardStyle>
        </CardWrapper>
    )
}

export default Card