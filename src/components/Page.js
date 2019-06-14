import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import ContactPage from "../Pages/ContactPage";
import AdminPage from "../Pages/AdminPage";
import ErrorPage from "../Pages/ErrorPage";


class Page extends Component {
    render() {
        return (
            <>
            <Route path='/' exact component={HomePage}   />
            <Route path='/products' component={ProductPage}   />
            <Route path='/contact' component={ContactPage}   />
            <Route path='/admin'  component={AdminPage}   />
            <Route path='/'  component={ErrorPage}   />
            </>

        );
    }
}

export default Page;