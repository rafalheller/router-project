import React from 'react';
import '../scss/App.scss';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import Page from "./Page";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">nav</Link>
                    </li>
                    <li>
                        <Link to="/header/">header</Link>
                    </li>
                    <li>
                        <Link to="/footer/">footer</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/" exact component={Nav}/>
            <Route path="/header" component={Header}/>
            <Route path="/page" component={Page}/>
            <Route path="/footer" component={Footer}/>


        </Router>
    );
}

export default App;
