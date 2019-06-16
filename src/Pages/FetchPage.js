import React, {Component} from 'react';
import './../scss/FetchPage.scss'

class FetchPage extends Component {
    state = {
        items: [],
    }

    componentDidMount() {
        fetch('http://localhost:3001/articles/')
            .then(resp => resp.json())
            // .then(resp => console.log(resp))
            .then(json => {
                this.setState({
                    items: json,
                })
            })

    }

    render() {
        const {items} = this.state;
        const styles = {
            margin: "15px 0"
        }

        const itms = items.map(item => (
            <article key={item.id}>
                {item.author}
                <h4 style={styles}>{item.title}</h4>
                <p style={styles}>{item.text}</p>
            </article>
        ));

        return (
            <div>
                <h1>Books</h1>
                {itms}
            </div>
        );
    }
}

export default FetchPage;