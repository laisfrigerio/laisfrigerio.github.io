import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './reset.css';

import Header from "../Header";

import IndexPage from "../../pages/Index";
import EducationPage from "../../pages/Education";
import ProjectPage from "../../pages/Project";

class App extends React.Component  {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/educacao" component={EducationPage} />
                    <Route path="/projetos" component={ProjectPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;