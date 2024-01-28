import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Logo  from "../assets/vision.png";
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';
import { GradientText } from '../styles/Typography';

const NavBarComponent = () => {
    return (
        <AppBar style={{ background: 'transparent', boxShadow: 'none'}} >
            <Toolbar>
                <Box 
                    component="img"
                    sx={{ height: 50, width: 50, marginRight:2 }}
                    src={Logo}
                    alt="Visionify Logo"

                />
                    <GradientText variant="h6" sx={{ flexGrow: 1}}>
                        Visionify
                    </GradientText>
                <Link
                    to="capabilities"
                    spy={true}
                    smooth={true}
                    offset={-70}  
                    duration={500}
                    color="inherit"
                    style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                >
                    <Typography>Capabilities</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default NavBarComponent;