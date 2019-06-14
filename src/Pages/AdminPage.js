import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom'

const permission = false;

class AdminPage extends Component {
    render() {
        return (
           <Route render={()=> (
               permission ? <h3>Panel admina - dzień dobry!</h3> : <Redirect to={'/login'}/>
           )}/>
        );
    }
}

export default AdminPage;