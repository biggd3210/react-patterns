import React, { useState, useEffect } from "react";
import { Routes as Switch, Route, Navigate as Redirect, BrowserRouter, useNavigate } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


function Routeways() {
  
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    "red": "#FF0000",
    "green": "#00FF00",
    "blue": "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return (
      <Color {...props} hex={hex} color={color} />
    )
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        <Route exact path="/colors/new" element={<NewColorForm addColor={handleAdd} />}/>
        <Route path="/colors/:color" render={(props) => (<Color hex={colors[props.match.params]} color={props.match.params} />)}/>
        <Route path="/" element={<Redirect replace to="/colors" />} />
        <Route element={<Redirect replace to="/colors" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routeways;
