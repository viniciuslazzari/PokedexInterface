import { TopBarContainer, TopBarStyle, MidSectionIcon, TopBarButton } from "./style"
import { Link } from "react-router-dom";
import { Zap, Plus } from 'react-feather';

const TopBar = () => {
    return (
        <TopBarContainer>
            <TopBarStyle>
                <MidSectionIcon> 
                    <Zap style={{ color: "white" }} />
                    <p>Pokémons</p>
                </MidSectionIcon>
                <MidSectionIcon> 
                    <Zap style={{ color: "white" }} />
                    <p>Pokémons</p>
                </MidSectionIcon>
                <MidSectionIcon> 
                    <Zap style={{ color: "white" }} />
                    <p>Pokémons</p>
                </MidSectionIcon>
                <MidSectionIcon> 
                    <Zap style={{ color: "white" }} />
                    <p>Pokémons</p>
                </MidSectionIcon>
                <MidSectionIcon>
                    <Link to="/new" style={{ textDecoration: 'none' }}>
                        <TopBarButton>
                            <Plus style={{ marginLeft: 14, color: "white" }} />
                            <p>Create</p>
                        </TopBarButton>
                    </Link>
                </MidSectionIcon>
            </TopBarStyle>
        </TopBarContainer>
    )
}

export default TopBar