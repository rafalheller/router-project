import React, {Component} from 'react';
import Article from "../components/Article";



const articles = [{
    id: 1,
    title: "lorem1",
    author: "Rafał Heller",
    text: " Lorem ipsum dolor sit amet," +
        " consectetur adipisic" +
        "ing elit. Explicab"
}, {
    id: 2,
    title: "lorem2",
    author: "Jan Nowak",
    text: " Lorem ipsum dolor sit amet," +
        " consectetur adipisic" +
        "ing elit. Explicab"
}, {
    id: 3,
    title: "lorem3",
    author: "Harry Potter",
    text: " Lorem ipsum dolor sit amet," +
        " consectetur adipisic" +
        "ing elit. Explicab"
}]

class HomePage extends Component {
    render() {
        const artList = articles.map(article => {
            return (
                <Article key={article.id} {...article}/>
            );
        })

        return (
            <div className='home'>
                {artList}
            </div>
        );
    }
}

export default HomePage;