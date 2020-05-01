import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './reset.css';

import Aside from '../Aside';
import Header from "../Header";

import IndexPage from "../../pages/Index";
import EducationPage from "../../pages/Education";
import ProjectPage from "../../pages/Project";

const Flex = styled.div`
    display: flex;

    @media screen and (max-width: 616px) {
        flex-direction: column;
    }
`;


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