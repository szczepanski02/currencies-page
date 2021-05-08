import React from 'react';
import './Topbar.css';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const Topbar = () => {

    const [data, setData] = React.useState([]);
    const [ value, setValue ] = React.useState("");

    React.useEffect(() => {
        if(data.length < 1) {
            fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
            .then(res => res.json())
            .then(data => {
                setData(data[0].rates);
            })
            .catch(err => console.log(err));
        }
    });

    const list = data.map(el => (
        el.code
    ));

    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    const history = useHistory();

    const clickHandler = (e) => {
        const inputValue = value.toUpperCase();
        if(inputValue.length === 3 && list.indexOf(inputValue) !== -1) {
            history.push(`/currency/${inputValue}`);
            setValue("");
        } else {
            setValue("");
            alert('This code doesnt exist!');
        }
    }
    
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbarInput">
                    <label>
                    <input type="search" className="searchInput" placeholder="Type a currency code!" value={value} onChange={inputHandler}/>
                    <SearchIcon onClick={clickHandler} className="searchIcon" fontSize="large"/>
                    </label>
                </div>
            </div>
        </div>
    )

}
export default Topbar;