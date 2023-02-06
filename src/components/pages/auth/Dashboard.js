import { Button, CssBaseline, Grid, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './ChangePassword';


const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        console.log('Logout Clicked');
        navigate('/login')
    }
    return <>
    <CssBaseline />
    <Grid container>
        <Grid item sm={4} sx={{backgroundColor:'gray', p:5, color:'white' }}>
            <h1>DashBoard</h1>
            <Typography variant='h5'>Email:ravigupta9201@gmail.com </Typography>
            <Typography variant='h6'>Na,e:ravigupta9201@gmail.com </Typography>
            <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt: 8}}>Logout</Button>
        </Grid>
        <Grid item sm={8}>
            <ChangePassword />
        </Grid>
    </Grid>
    
    </>
}

export default Dashboard
