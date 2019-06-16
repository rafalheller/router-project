import React, {Component} from 'react';
import {Route} from "react-router-dom"
import './../scss/Footer.scss'

class Footer extends Component {
    render() {
        return (


            <div className="container">
                <h2>Footer</h2>
                <Route path='/' exact render={() => {
                    return <p>jesteś na <span>stronie głównej</span></p>
                }}/>
                <Route path='/:page' exact render={(props) => {
                    return <p>jesteś na <span>{props.match.params.page}</span></p>


                }}/>

            </div>
        );
    }
}

export default Footer;