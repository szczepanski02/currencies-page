import React from 'react';
import { Line } from 'react-chartjs-2';

const CurrencyChart = ({ last, currency, color }) => {

    const [isLoaded, setIsLoaded] = React.useState(false);

    const [chartData, setChartData] = React.useState({
        labels: [],
        datasets: [
            {
                label: 'mid',
                data: [],
            }
        ]
    });
    let chartValuesArray;
    let chartDateArray;

    const setChartValues = () => {
        setChartData({
            labels: chartDateArray,
            datasets: [
                {
                    label: 'mid',
                    data: chartValuesArray,
                    backgroundColor: color,
                    borderColor: '#b8b8b8',
                    pointRadius: 8,
                }
            ]
        });
    }

    if(currency && isLoaded !== true) {

        setIsLoaded(true);

        const midArray = currency.rates.map(item => (
            item.mid
        ));
        const dateArray = currency.rates.map(item => (
            item.effectiveDate
        ));

        if(last === "7") {
            chartValuesArray = midArray.slice(22, 29);
            chartDateArray = dateArray.slice(22, 29);
            setChartValues();
        }
        else {
            chartValuesArray = midArray;
            chartDateArray = dateArray;
            setChartValues();
        }
        
        
    }

    return (
        <div className="currencyChart">
            <Line
                type={Line}
                data={chartData}
                height={last === "30" ? '100px' : '100%'}
            />
        </div>
    )
}
export default CurrencyChart;