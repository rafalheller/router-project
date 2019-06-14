import React, {Component} from 'react';

class Article extends Component {
    render() {
        const {author, text, title} = this.props;

        const styles = {
            marginTop: 40
        }
        return (
            <article style={styles}>
                <h1>{title}</h1>
                <span>{author}</span>
                <p>{text}</p>
            </article>
        );
    }
}

export default Article;