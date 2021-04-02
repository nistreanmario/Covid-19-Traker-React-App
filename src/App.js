import React from 'react'
import styles from './App.module.css';
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import {Footer, Header} from "./components";
import { BrowserRouter, Route} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';

class App extends React.Component{
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
    render(){
        return(
            <BrowserRouter>
                <div className={styles.container}>
                    <Header />
                        <Route exact path='/' component={HomePage} />
                        <Route path='/About' component={AboutPage} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;