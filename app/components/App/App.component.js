import '../../styles/application.scss';
import { connect } from '../../services';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppStyled } from './App.styled';
import TablePage from '../../pages/TablePage/TablePage.component';
import About from '../../pages/AboutPage/About.component';

import Header from '../Header/Header.component';


// The below line is here as an example of getting prices
connect('AAPL');

const App = () => {
    return (
        <AppStyled className="stock-ticker">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <TablePage />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
            </Switch>

        </AppStyled>
    );
};

export default App;
