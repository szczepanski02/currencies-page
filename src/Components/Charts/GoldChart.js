import React from 'react';
import { Line } from 'react-chartjs-2';

const GoldChart = () => {

    const [api, setAPI] = React.useState([]);

    const [chartData, setChartData] = React.useState({
        labels: [],
        datasets: [
            {
                label: 'mid',
                data: [],
                backgroundColor: 'rgb(20, 141, 255)',
                borderColor: 'rgb(133, 196, 255)',
            }
        ]
    });

    React.useEffect(() => {
        if(api.length < 1) {
            fetch('http://api.nbp.pl/api/cenyzlota/last/7/?format=json')
                .then(res => res.json())
                .then(data => {
                    setAPI(data)
                })
                .catch(err => console.log(err));
        }
    });

    if(api.length > 1 && chartData.labels.length < 1) {
        
        const dateListFromApi = api.map(el => (
            el.data
        ));
        const valueListFromApi = api.map(el => (
            el.cena
        ));
        setChartData({
            labels: dateListFromApi,
            datasets: [
                {
                    label: 'mid',
                    data: valueListFromApi
                }
            ]
        });
    }

    return (
        <div className="goldChart">
            <h2 style={{marginBottom: 20}}>The last 7 quotations of <span style={{color: 'rgb(20, 141, 255)'}}>gold prices</span></h2>

            <Line
                type={Line}
                data={chartData}
            />
        </div>
    );
}
export default GoldChart;