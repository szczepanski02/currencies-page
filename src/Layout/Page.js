import Dashboard from '../Pages/Dashboard';
import Currency from '../Components/Currency';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Page404 from '../Pages/Page404';

const Page = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/currency/:code" component={Currency}/>
                <Route path="/stats" component={Stats}/>
                <Route path="/foc" component={Foc}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Page404}/>
            </Switch>
        </React.Fragment>
    );
}
export default Page;

const Stats = () => (
    <div>Stats page is empty</div>
)
const Foc = () => (
    <div>Foc page is empty</div>
)
const Contact = () => (
    <div>Contact page is empty</div>
)