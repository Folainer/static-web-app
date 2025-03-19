import Header from "../MainComponents/Header"
import { Container, Typography, Card, Box, Button } from "@mui/material"
// Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, TextField
import { useState } from "react"
import Footer from "../MainComponents/Footer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store"
import { logout } from "../UserSlice"


const ProfilePage = () => {
    const userState = useSelector((state: RootState) => state.user) as { currentUser: { name: string, email: string, nickname: string, birthday: string, gender: string } | null }

    const currentUser = userState.currentUser

    const userData = []

    if (currentUser) {
        const tempUserData = [
            {
                field: 'Name',
                value: currentUser.name
            },
            {
                field: 'Email',
                value: currentUser.email
            },
            {
                field: 'nickname',
                value: currentUser.nickname
            },
            {
                field: 'birthday',
                value: currentUser.birthday
            },
            {
                field: 'Gender',
                value: currentUser.gender
            }
        ]
        tempUserData.map(row => {
            userData.push(row)
        })
    } else {
        userData.push({
            field: 'Status',
            value: 'Unregistered'
        })
    }

    const [__, setOpen] = useState<boolean>(false)

    const [_, update] = useState(0)

    const dispatch = useDispatch()

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
                <Button onClick={() => {
                    dispatch(logout())
                    update(prev => prev + 1)
                    }   
                } variant="contained" fullWidth sx={{mt: 3}}>Exit</Button>
                {/* <Typography variant='h5' align='center' sx={{mt: 4}}>Personal game history</Typography>
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
                </TableContainer> */}
                
            </Container>
            {/* <Dialog
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
            </Dialog> */}
            <Footer />
        </>
    )
}

export default ProfilePage