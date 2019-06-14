import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import ContactPage from "../Pages/ContactPage";
import AdminPage from "../Pages/AdminPage";
import ErrorPage from "../Pages/ErrorPage";


class Page extends Component {
    render() {
        return (
            <Switch>
            <Route path='/' exact component={HomePage}   />
            <Route path='/products' component={ProductPage}   />
            <Route path='/contact' component={ContactPage}   />
            <Route path='/admin'  component={AdminPage}   />
            <Route component={ErrorPage}   />
    </Switch>

        );
    }
}

export default Page;