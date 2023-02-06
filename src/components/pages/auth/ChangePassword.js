import { Box, TextField, Button, Alert } from '@mui/material'
import { useState } from 'react'

const ChangePassword = ()=>{
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }
        if (actualData.password && actualData.password_confirmation){
            if (actualData.password === actualData.password_confirmation) {
                console.log(actualData)
                setError({ status:true, msg:"Password Change Successful", type: 'success' })
            } else {
                setError({ status:true, msg:"password and confirm password does not matched", type: 'error' })
            }
        }else{
            setError({ status:true, msg:"All fields are required", type: 'error' })
        }
    }

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth:600, mx: 4 }}>
        <h1>Change Password</h1>
            <Box component='form' noValidate sx={{ mt: 1 }} id="password-change-form" onSubmit={handleSubmit}>
            <TextField margin="normal" required fullWidth  name="password" label="New Password" type='password'/>
            <TextField margin="normal" required fullWidth  name="password_confirmation" label="New Confirm Password" type='password'/>
            <Box textAlign='center'>
                <Button type="submit" variant="contained" sx={{ mt:3, mb:2, px:5 }}>Update</Button>
            </Box>
            {error.status ? <Alert severity={error.type}> {error.msg} </Alert> : '' }
            </Box>
        </Box>
    </>
}

export default ChangePassword