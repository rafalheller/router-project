import React, {Component} from 'react';
import './../scss/Error.scss'

class ErrorPage extends Component {
    render() {
        return (
            <div className='error'>
                <h2>Uuppsssss, nie ma takiej strony</h2>
            </div>
        );
    }
}

export default ErrorPage;