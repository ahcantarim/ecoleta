import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Inicio from './pages/Inicio';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Inicio} path="/" exact />
            <Route component={Home} path="/nlw" exact />
            <Route component={CreatePoint} path="/nlw/create-point" />
        </BrowserRouter >
    );
}
export default Routes;