import Header from "../MainComponents/Header"
import { Container, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Card, Dialog, Box, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, TextField } from "@mui/material"
import { useState } from "react"
import Footer from "../MainComponents/Footer"


const ProfilePage = () => {
    const userData = [
        {
            field: 'Name',
            value: 'Maksym',
        },
        {
            field: 'Birthday',
            value: '27.06.2004',
        },
        {
            field: 'Gener',
            value: 'Male',
        },
        {
            field: 'Nickname',
            value: 'folainer',
        },
    ]

    const [open, setOpen] = useState<boolean>(false)


    return (
        <>
            <Header name="Profile" />
            <Container maxWidth="md">
                <Typography variant='h5' align='center' sx={{mt: 3}} gutterBottom>Personal info</Typography>
                <Typography align='center'>
                Info about you and your preferences across this game
                </Typography>
                {/* <Paper sx={{mt: 3}} elevation={2}>a</Paper> */}
                <Card sx={{ mx: "auto", mt: 5 }}>
                    <Typography sx={{p:2, mt:1}} variant="h5" gutterBottom>
                    Personal profile information
                    </Typography>
                    {(userData.map(row => (
                        <Box 
                            sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.03)'
                            },
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 2,
                            cursor: 'pointer'
                            }}
                            onClick={() => setOpen(true)}>
                            <Typography 
                                variant="body1" 
                                sx={{ flexGrow: 1, cursor: "pointer" }} 
                            >
                                {row.field}
                            </Typography>
                            <Typography 
                                align='right'
                                variant="body1" 
                                sx={{ flexGrow: 1, cursor: "pointer" }} 
                            >
                                {row.value}
                            </Typography>
                        </Box>
                    )))}
                </Card>
                <Typography variant='h5' align='center' sx={{mt: 4}}>Personal game history</Typography>
                <TableContainer sx={{mt: 2}} component={Paper}>
                    <Table sx={{ minWidth: 450}} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Rating</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {[1,2,3,4].map((row) => (
                            <TableRow
                            key={row}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row}</TableCell>
                                <TableCell align="left">{row}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </Container>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle>Change field</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Change specific field
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: 'fit-content',
                        }}
                    >
                        <TextField label="Name" fullWidth margin="normal" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
            <Footer />
        </>
    )
}

export default ProfilePage