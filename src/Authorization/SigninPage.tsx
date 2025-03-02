import { Paper, Typography, TextField, Button, Box } from "@mui/material"
import Footer from "../MainComponents/Footer"

const SigninPage = () => {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
            }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1
            }}>
                <Paper sx={{ p: 3, maxWidth: '400px'}} elevation={1}>
                    <Typography variant="h6">Sign in to this website</Typography>
                    <TextField label="Nickname" fullWidth margin="normal" />
                    <TextField label="Password" type="password" fullWidth margin="normal" />
                    <Button variant="contained" fullWidth sx={{mt: 3}}>Sign in</Button>
                </Paper>
            </Box>
            <Footer />
        </Box>
    )
}

export default SigninPage