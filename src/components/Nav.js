import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './../scss/Nav.scss'
const list = [
    {name:'start', path:'/', exact: true},
    {name:'produkty', path:'/products'},
    {name:'kontakt', path:'/contact'},
    {name:'panel admin', path:'/admin'}
]

class Nav extends Component {
    render() {

        const menu = list.map(item =>(
            <li key={item.name}>
                <NavLink exact={item.exact? item.exact : false} to={item.path}>{item.name}</NavLink>
            </li>
        ))
        return (
            <nav className='main-nav'>
                <ul>
                    {menu}
                </ul>
            </nav>
        );
    }
}

export default Nav;