import React from 'react';
import '../scss/App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import Page from "./Page";

function App() {
    return (
        <Router>
            <div className="app">

                    <header >
                        {<Header/>}
                    </header>

                    <main>
                        <aside>
                            {<Nav/>}
                        </aside>

                        <section className='page'>
                            {<Page/>}
                        </section>
                    </main>
                    <footer>
                        {<Footer/>}
                    </footer>
                </div>
        </Router>
    );
}

export default App;
