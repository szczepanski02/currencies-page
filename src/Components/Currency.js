import './Currency.css';
import React from 'react';
import CurrencyChart from './Charts/CurrencyChart';

const Currency = ({ match }) => {

    const [data, setData] = React.useState();

    React.useEffect(() => {

        if(!data) {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${match.params.code}/last/30/?format=json`)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
        }

    });

    if(data && match.params.code !== data.code) {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${match.params.code}/last/30/?format=json`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }

    return (
        <div className="currencyPage">
            <div className="container">
                <div className="row mx-auto justify-content-center">
                    <div className="col-md-5 borderCard">
                        <h3>Currency name: <span className="primaryText">{data ? data.currency : null}</span></h3>
                        <p>Code: <span className="primaryText">{data ? data.code : null}</span></p>
                        <p>Today mid: <span className="primaryText">{data ? data.rates[29].mid : null}</span></p>
                    </div>
                    <div className="col-md-6">
                        <div style={{padding: '20px'}}>
                            <h2>Last 7 days</h2>
                            <CurrencyChart last="7" currency={data} color="rgb(20, 141, 255)"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div style={{padding: '40px'}}>
                        <h2>Last 30 days</h2>
                        <CurrencyChart last="30" currency={data} color="rgb(0, 128 ,0)"/>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Currency;