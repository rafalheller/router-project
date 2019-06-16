import React, {Component} from 'react';
import '../scss/ContactPage.scss'
import {Prompt} from "react-router-dom"

class ContactPage extends Component {
    state = {
        value: "",
        isEmpty: true
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: "",
            isEmpty: true
        })
    }
    handleChange = (e) => {
        if (e.target.value > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: false
        })
        }
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
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={!this.state.isEmpty}
                    message='Masz niewypełniony formularz. Czy napewno chcesz opuścić tę stronę ?'
                />
            </div>
        );
    }
}

export default ContactPage;