import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo  from "../../public/vision.png";
import Box from '@mui/material/Box';

const NavBarComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box 
                    component="img"
                    sx={{ height: 30, width: 30, marginRight:2 }}
                    src={Logo}
                    alt="Visionify Logo"

                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Visionify
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBarComponent;