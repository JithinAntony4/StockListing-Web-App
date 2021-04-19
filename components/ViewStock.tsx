import React, {useEffect, useState} from "react";
import {Container, LinearProgress} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import theme from "../src/theme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Currency from 'react-currency-formatter';


export default function ViewStock({selectedStock}) {

    const [stockDetails, setStockDetails] = useState({
        id: '',
        symbol: '',
        name: '',
        marketCap: '',
        price: '',
        stockPE: '',
        dividendYield: '',
        roce: '',
        roe: '',
        debtToEquity: '',
        eps: '',
        reserves: '',
        debt: '',
    });

    useEffect(() => {
        (async () => {
            if (!selectedStock) return;
            let response = await fetch(`/api/stocks/${selectedStock}`);
            let res = await response.json();
            console.log(res);
            setStockDetails(res)
        })();
    }, [selectedStock])

    return (
        <Container>
            <Paper variant={"elevation"} elevation={3}
                   style={{
                       padding: theme.spacing(5),
                       borderRadius: theme.spacing(2),
                   }}>
                {stockDetails.id ?
                    <Grid container alignItems={"flex-start"} justify={"center"} spacing={2} direction={"column"}>
                        <Grid item xs={12}>
                            <Typography variant="h5">{stockDetails.name}</Typography>
                        </Grid>
                        <Grid container alignItems={"center"} justify={"center"} spacing={2} direction={"row"}>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    Market Cap
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.marketCap}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    Price
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.price}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    Stock P/E
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.stockPE}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    Dividend Yield
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.dividendYield}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    ROCE
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.roce}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    ROE
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.roe}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    Debt to equity
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.debtToEquity}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    EPS
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.eps}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography color={"textSecondary"} variant="caption">
                                    Debt
                                </Typography> <br/>
                                <Typography color={"secondary"} variant="body2">
                                    <b><Currency
                                        quantity={stockDetails.debt}
                                        currency="INR"
                                    /></b>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    :
                    <LinearProgress/>
                }
            </Paper>
        </Container>
    );
}
