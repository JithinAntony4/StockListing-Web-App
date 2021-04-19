import React from "react";
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import {Container} from "next/app";
import Grid from "@material-ui/core/Grid";
import theme from "../../src/theme";
import {useRouter} from "next/router";
import ViewStock from "../../components/ViewStock";

export default function StockDetails() {

    let router = useRouter();

    let selectedStock = router.query.name;


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container>
                <Grid style={{marginTop: theme.spacing(5)}} container alignItems={"center"} justify={"center"}
                      direction={"column"} spacing={2}>
                    <Grid item>
                        <ViewStock selectedStock={selectedStock}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
