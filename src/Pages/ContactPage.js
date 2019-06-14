import React, {Component} from 'react';
import '../scss/ContactPage.scss'

class ContactPage extends Component {
    state = {
        value:""
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }
handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
}
    render() {
        return (
         <div className="contact">
             <form onSubmit={this.handleSubmit}>
                 <h3>Napisz do nas</h3>
                 <textarea value={this.state.value}
                           cols="30"
                           rows="10"
                 onChange={this.handleChange}></textarea>
                 <button >Wyślij</button>
             </form>
         </div>
        );
    }
}

export default ContactPage;