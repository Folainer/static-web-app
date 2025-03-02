import Header from "../MainComponents/Header"
import { Container, Typography, Button, Box, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, Avatar } from "@mui/material"
import './Main.scss'
import Footer from "../MainComponents/Footer"

const MainPage = () => {
    return (
        <>
            <Header name="Main" />
            <Container maxWidth="md">
                <Typography variant="h5" align="center" sx={{mt: 3}}>About game</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '15px'
                }}>
                    <Box sx={{
                        width: '100px'
                    }}>
                        <img className="main__iconimg" src='/img/icon.jpg' />
                    </Box>
                    <Typography sx={{mt: 1}}>
                    The essence of the game is that you have to pass parkour in a 3D game. The more distance you pass, the greater the raging. If you fall, the game is over.
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 2
                }}>
                    <Button variant='outlined' href='/play'>Start to play</Button>
                </Box>
                <Typography variant="h5" align="center" sx={{mt: 3}}>Game development</Typography>
                <Typography sx={{mt: 1}}>
                The game was written in TypeScript using React. The Material UI framework was used for the interface. SCSS was also used to write its styles.
                </Typography>
                <Typography variant="h5" align="center" sx={{mt: 3}}>Information about top players</Typography>
                <TableContainer sx={{mt: 2}} component={Paper}>
                    <Table sx={{ minWidth: 450}} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{width: '20px'}}></TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Nickname</TableCell>
                            <TableCell align="left">Rating</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {[1,2,3,4].map((row) => (
                            <TableRow
                            key={row}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{width: '20px'}} component="th" scope="row">
                                    <Avatar>A</Avatar>
                                </TableCell>
                                <TableCell align="left">{row}</TableCell>
                                <TableCell align="left">{row}</TableCell>
                                <TableCell align="left">{row}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
        </>
    )
}

export default MainPage