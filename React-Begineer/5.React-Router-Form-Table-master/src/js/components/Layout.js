import React from "react";
import { render } from 'react-dom'
import Footer from "./Footer";
import Header from "./Header";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Form from './Form'
import Grid from './Grid'

export default class Layout extends React.Component {
render() {
    return (
            <div>
              <Header/>
              <Router history={browserHistory}>
                <Route path="/" component={Form}/>
                <Route path="/grid" component={Grid}/> 
                <Route path="/form" component={Form}/>
              </Router>
              <Footer/>
            </div>
            )
    }
}
