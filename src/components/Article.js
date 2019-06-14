import React, {Component} from 'react';

class Article extends Component {
    render() {
        const {author, text, title} = this.props;

        const styles = {
            marginTop: 40,
            marginLeft: "1rem"
        }
        return (
            <article style={styles}>
                <h3 style={{textTransform: "uppercase", marginBottom: "1rem"}}>{title}</h3>
                <span>{author}</span>
                <p style={{fontSize: 15}}>{text}</p>
            </article>
        );
    }
}

export default Article;