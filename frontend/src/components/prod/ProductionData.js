import React from "react";
import { alpha } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableRow, TableContainer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GetHelloWorld } from './service'

const classes = {
    root: {
        flexGrow: 1
    },
    paper: {
        padding: 15,
        textAlign: "center"
    },
    tableRow: {
        color: "black",
        backgroundColor: "white"
    }
};

const Productiondata = ({ data }) => {
    return (
        <div style={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ px: 1, ml: 1, mt: 1 }}>
                    <Paper style={classes.paper}><h1>Overview</h1></Paper>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ pl: 1 }}>
                    <Box sx={{ width: '100%', ml: 1 }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <Toolbar
                                sx={{
                                    pl: { sm: 2 },
                                    pr: { xs: 1, sm: 1 },
                                    ...({
                                        color: "white",
                                        bgcolor: (theme) =>
                                            alpha(theme.palette.info.dark, 1),
                                    }),
                                }}
                            >
                                <Typography
                                    sx={{ flex: '1 1 100%' }}
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    Vehicle Parameters
                                </Typography>
                            </Toolbar>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 400 }}>
                                    <TableBody>
                                        <TableRow style={classes.tableRow}>
                                            <TableCell>
                                                Chassis Mass
                                            </TableCell>
                                            <TableCell align="right">1170</TableCell>
                                        </TableRow>
                                        <TableRow style={classes.tableRow}>
                                            <TableCell>
                                                Drag Coefficent
                                            </TableCell>
                                            <TableCell align="right">0.7</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ pr: 1 }}>
                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 1 }}>
                            <Toolbar
                                sx={{
                                    pl: { sm: 2 },
                                    pr: { xs: 1, sm: 1 },
                                    ...({
                                        color: "white",
                                        bgcolor: (theme) =>
                                            alpha(theme.palette.info.dark, 1),
                                    }),
                                }}
                            >
                                <Typography
                                    sx={{ flex: '1 1 100%' }}
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    Battery Data
                                </Typography>
                            </Toolbar>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 400 }}>
                                    <TableBody>
                                        <TableRow style={classes.tableRow}>
                                            <TableCell>
                                                Voltage
                                            </TableCell>
                                            <TableCell align="right">
                                                {GetHelloWorld()}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow style={classes.tableRow}>
                                            <TableCell>
                                                Cost
                                            </TableCell>
                                            <TableCell align="right">$22/kW</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Productiondata