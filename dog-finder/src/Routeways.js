import React from "react";
import { Route, Routes as Switch, Navigate as Redirect } from 'react-router-dom';

import DogList from "./DogList";
import FilterDogDetails from './FilterDogDetails'

function Routeways({ dogs }) {
    
    return (
        <Switch>
            <Route path='/dogs' element={<DogList dogs={dogs} />}/>
            <Route path='/dogs/:name' element={<FilterDogDetails dogs={dogs}/>}/>
            <Route element={<Redirect replace to="/dogs"/>} />
        </Switch>
    );
}

export default Routeways;