import { Paper, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar } from "@mui/material"
import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../UserSlice"
import { useNavigate } from "react-router-dom"

const SignupForm : React.FC<{elevation : number}> = ({elevation}) => {
    const [name, setName] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [birthday, setBirthday] = useState<string>('')
    const [gender, setGender] = useState("");
    const [isBirthdayFocused, setIsBirthdayFocused] = useState<boolean>(false)
    const [open, setOpen] = useState(false)
    const [_, setIsRegistering] = useState<boolean>(true)

    // const href = isRegistering ? 

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false)
    }
    
    const handleClick = () => {
        if (!name || !nickname || !email || !password || !birthday || !gender) {
            setOpen(true)
        } else {
            dispatch(registerUser({ name, nickname, email, password, birthday, gender }))
            navigate('/')
            setIsRegistering(false)
        }
    }

    return (

        <Paper className='signup__paper' sx={{ p: 3}} elevation={elevation}>
            <Typography variant="h6">Sign up to this website</Typography>
            <TextField label="Name" onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
            <TextField label="Nickname" onChange={(e) => setNickname(e.target.value)} fullWidth margin="normal" />
            <TextField sx={{mt: 3}} onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth margin="normal" />
            <TextField label="Password" onChange={(e) => setPassword(e.target.value)} type="password" fullWidth margin="normal" />
            <TextField
                sx={{
                    boxSizing: 'border-box'
                }}
                label="Birthday"
                type={isBirthdayFocused ? 'date' : 'text'}
                fullWidth
                margin="normal"
                onChange={(e) => setBirthday(e.target.value)}
                onFocus={() => setIsBirthdayFocused(true)}
                onBlur={() => setIsBirthdayFocused(false)}
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
            <Button variant="contained" onClick={handleClick} fullWidth sx={{mt: 3}}>Sign up</Button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Not all data was entered"
            />
        </Paper>
    )
}

export default SignupForm