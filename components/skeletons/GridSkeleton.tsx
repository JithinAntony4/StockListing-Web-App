import {Skeleton} from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import React from "react";

export default function GridSkeleton({width, height, size}) {
    return (
        <>
            {Array.from(Array(size ? size : 6).keys()).map((value, index) => {
                return <Grid key={index} item xs={12}>
                    <Skeleton animation={"pulse"} variant="rect" height={height ? height : 80}
                              width="100%"/>
                </Grid>
            })}
        </>
    )
}
