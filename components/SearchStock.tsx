import React from "react";
import fetch from 'cross-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from "../src/theme";


export default function SearchStock({setSelectedStockName}) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('/api/stocks/get');
            const stocks = await response.json();
            if (active) {
                setOptions(stocks);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="search-stock-input"
            disableClearable
            style={{width: 500}}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => {
                setSelectedStockName(value.symbol);
                return option.name === `${value.name} (${value.symbol})`;
            }}
            getOptionLabel={(option) => `${option.name} (${option.symbol})`}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search for Company"
                    variant="outlined"
                    style={{borderRadius: theme.spacing(2)}}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
