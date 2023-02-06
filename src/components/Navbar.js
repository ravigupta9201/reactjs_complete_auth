import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:"yellow" }}>
                    Park Finder App
                </Typography>
                <Button component={NavLink} to='/' style={({ isActive })=>{ return { color: isActive?'#023047': ' '}} }  sx={{color:"white", textTransform:'none'}}>Home</Button>
                <Button component={NavLink} to='/contact' style={({ isActive })=>{ return { color: isActive?'#023047': ' '}} }  sx={{color:"white", textTransform:'none'}}>Contact</Button>

                <Button component={NavLink} to='/login' style={({ isActive })=>{ return { color: isActive?'#023047': ' '}} }  sx={{color:"white", textTransform:'none'}}>Login/Registration(user)</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </>
    )
}

export default Navbar

