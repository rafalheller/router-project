import React from 'react';
import './../scss/Header.scss'
import {Route, Switch} from 'react-router-dom'
import img1 from './../images/lake.jpg'
import img2 from './../images/lake2.jpg'
import img3 from './../images/lake3.jpg'

const Header = () => {


    return (

        <Switch render={()=>(
            <img src={img2} alt="lake"/>
        )}>
            <Route path='/' exact render={() => (
                <img src={img1} alt="lake"/>)}/>

            <Route path='/products' render={() => (
                <img src={img2} alt="lake"/>)}/>

            <Route path='/contact' render={() => (
                <img src={img3} alt="lake"/>)}/>

            <Route path='/admin' render={() => (
                <img src={img2} alt="lake"/>)}/>

        </Switch>

    );
}

export default Header;