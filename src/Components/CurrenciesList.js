import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const CurrenciesList = () => {

    const [state, setState] = React.useState({
        date: "",
        currencies: []
    });

    const columns = [
        { field: 'id', headerName: 'NR'},
        { field: 'code', headerName: 'CODE' },
        { field: 'currency', headerName: 'CURRENCY', flex: 1},
        { field: 'mid', headerName: 'MID'},
    ]


    const setDataArray = state.currencies.map((currency, index) => (
            {id: index, code: currency.code, currency: currency.currency, mid: currency.mid}
    ));

    let rows = setDataArray;

    React.useEffect(() => {

        if(state.currencies === [] || state.date === "") {
            fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
            .then(res => res.json())
            .then(res => {
                
                setState({
                    date: res[0].effectiveDate,
                    currencies: res[0].rates
                });
            })
            .catch(err => console.log(err));
        }

    });


    return (
        <div className="MuiDataGrid-mainGridContainer" style={{ height: '100vh'}}>
            <DataGrid rows={rows} columns={columns} pageSize={100}/>
        </div>
    )

}
export default CurrenciesList;