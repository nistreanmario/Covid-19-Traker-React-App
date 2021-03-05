import React from 'react'
import styles from './App.module.css';
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import {Footer, Header} from "./components";
import { BrowserRouter, Route} from "react-router-dom";


class App extends React.Component{

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