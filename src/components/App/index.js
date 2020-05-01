import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './reset.css';

import Aside from '../Aside';
import Header from "../Header";
import Flex from '../Flex';

import IndexPage from "../../pages/Index";
import EducationPage from "../../pages/Education";
import ProjectPage from "../../pages/Project";


class App extends React.Component  {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Flex>
                    <Aside />
                    <Switch>
                        <Route path="/" exact component={IndexPage} />
                        <Route path="/educacao" component={EducationPage} />
                        <Route path="/projetos" component={ProjectPage} />
                    </Switch>
                </Flex>
            </BrowserRouter>
        );
    }
}

export default App;