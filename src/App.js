import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './containers/home/home';
import Help from './containers/help';
import Form from './component/Form/form';

export default  () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={HomePage}/>
                <Route path={"/help"} component={Help}/>
                <Route path={"/form"} component={Form}/>
            </Switch>
        </BrowserRouter>
    );
}