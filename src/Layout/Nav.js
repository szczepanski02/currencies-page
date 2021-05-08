import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const list = [
        {name: "Dashboard", path: "/", exact: true},
        {name: "Statistic", path: "/stats"},
        {name: "Future of currencies", path: "/foc"},
        {name: "Contact", path: "/contact"},
    ]

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink className="navlink" to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ));

    return (
        <div className="nav">
            <div className="container">
                <ul>
                    {menu}
                </ul>
            </div>
        </div>
    )
}
export default Nav;