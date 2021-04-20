import React, {useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import theme from "../src/theme";
import Grid from "@material-ui/core/Grid";
import fetch from "cross-fetch";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import {useRouter} from "next/router";
import LinearProgress from "@material-ui/core/LinearProgress";


export default function TopStocks() {

    const [topStocks, setTopStocks] = useState([]);

    let router = useRouter();

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/stocks/top');
            const stocks = await response.json();
            setTopStocks(stocks)
        })();
    }, [])

    return (
        <Container>
            <Paper variant={"outlined"} elevation={0}
                   style={{
                       padding: theme.spacing(2, 5, 3, 5),
                       borderRadius: theme.spacing(2),
                   }}>
                <Typography>Top Stocks</Typography> <br/>
                <Grid container alignItems={"center"} justify={"center"} spacing={2} direction={"row"}>
                    {topStocks.length >= 0 ?
                        <>
                            {topStocks.map(value => <Grid item xs>
                                <Chip color={"primary"} onClick={event => {
                                    router.push(`/stock/${value.symbol}`)
                                }} label={value.name} variant="outlined"/>
                            </Grid>)}
                        </>
                        : <Container>
                            <LinearProgress/>
                        </Container>}
                </Grid>
            </Paper>
        </Container>
    );
}
