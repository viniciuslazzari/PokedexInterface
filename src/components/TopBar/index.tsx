import { TopBarContainer, TopBarStyle, MidSectionIcon } from "./style"
import { Link } from "react-router-dom";
import { Zap, Plus } from 'react-feather';
import Button from "../Button";
import { PrimaryBlue } from "../../config/colors";

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
                        <Button onClick={() => {}} color={PrimaryBlue}>
                            <Plus style={{ marginLeft: 14, color: "white" }} />
                            <p>Create</p>
                        </Button>
                    </Link>
                </MidSectionIcon>
            </TopBarStyle>
        </TopBarContainer>
    )
}

export default TopBar