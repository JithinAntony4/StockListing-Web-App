import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../src/theme";
import {CssBaseline, makeStyles} from "@material-ui/core";
import {Container} from "next/app";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SearchStock from "../components/SearchStock";
import {useRouter} from "next/router";
import TopStocks from "../components/TopStocks";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Home() {
    const [selectedStock, setSelectedStockName] = useState("");

    const classes = useStyles();

    let router = useRouter();

    useEffect(() => {
        if (!selectedStock) return;
        router.push(`/stock/${selectedStock}`);
    }, [selectedStock])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Stock Listing
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Grid style={{marginTop: theme.spacing(5)}} container alignItems={"center"} justify={"center"}
                      direction={"column"} spacing={2}>
                    <Grid item>
                        <SearchStock setSelectedStockName={setSelectedStockName}/>
                    </Grid>
                    <Grid item>
                        <TopStocks/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
