import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

const list = [
    {name:'start', path:'/'},
    {name:'produkty', path:'/products'},
    {name:'kontakt', path:'/contact'},
    {name:'panel admin', path:'/admin'}
]

class Nav extends Component {
    render() {

        const menu = list.map(item =>(
            <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
            </li>
        ))
        return (
            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>
        );
    }
}

export default Nav;