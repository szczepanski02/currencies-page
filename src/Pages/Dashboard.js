import CurrenciesList from '../Components/CurrenciesList';
import './Dashboard.css';
import GoldChart from '../Components/Charts/GoldChart';

const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="dashboard__leftside col-md-6">
                        <CurrenciesList />
                    </div>

                    <div className="dashboard__rightside col-md-6">
                        <GoldChart/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dashboard;