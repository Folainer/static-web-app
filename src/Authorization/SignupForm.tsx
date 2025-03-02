import { Paper, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import React from "react"
import { useState } from "react"

const SignupForm : React.FC<{elevation : number}> = ({elevation}) => {
    const [gender, setGender] = useState("");
    const [isBirthdayFocused, setBirthday] = useState<boolean>(false)
    
    return (

        <Paper className='signup__paper' sx={{ p: 3}} elevation={elevation}>
            <Typography variant="h6">Sign up to this website</Typography>
            <TextField label="Name" fullWidth margin="normal" />
            <TextField label="Nickname" fullWidth margin="normal" />
            <TextField sx={{mt: 3}} label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <TextField
                sx={{
                    boxSizing: 'border-box'
                }}
                label="Birthday"
                type={isBirthdayFocused ? 'date' : 'text'}
                fullWidth
                margin="normal"
                onFocus={() => setBirthday(true)}
                onBlur={() => setBirthday(false)}
            />
            <FormControl 
                fullWidth
                sx={{mt:2}}>
                <InputLabel sx={{
                    padding: '0 5px',
                    backgroundColor: 'white',
                    boxSizing: 'border-box'
                }}>Gender</InputLabel>
                <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" fullWidth sx={{mt: 3}}>Sign up</Button>
        </Paper>
    )
}

export default SignupForm