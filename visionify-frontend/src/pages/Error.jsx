/* eslint-disable react/no-unescaped-entities */
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const CenteredContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const CenteredImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  marginBottom: 2,
});
const Error = () => {

  const error = useRouteError();
  console.log(error);
  if(error.status === 404){
    return (
        <CenteredContainer>
            <CenteredImage src={img} alt="not found" />
            <Typography variant="h5">Ohh! Page not found</Typography>
            <Typography>We can't seem to find the page you are looking for.</Typography>
            <Button variant="contained" component={Link} to="/">Back Home</Button>
      </CenteredContainer>
    )
  }
  return (
        <CenteredContainer>
            <Typography variant="h5">Something went wrong</Typography>
        </CenteredContainer>
)
}

export default Error;