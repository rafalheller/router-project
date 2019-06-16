import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import ContactPage from "../Pages/ContactPage";
import AdminPage from "../Pages/AdminPage";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import ProductListPage from "../Pages/ProductListPage";
import FetchPage from "../Pages/FetchPage";


class Page extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/products' component={ProductListPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/product/:id' component={ProductPage}/>
                <Route path='/admin' component={AdminPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/books' component={FetchPage}/>
                <Route component={ErrorPage}/>
            </Switch>

        );
    }
}

export default Page;
