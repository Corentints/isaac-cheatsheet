import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Trinkets from "./pages/Trinkets";

function App() {
  return (
    <>

     <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/home">
            <Home />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/trinkets">
            <Trinkets />
          </Route>
        </Switch>
    </Router>

    </>
  );
}

export default App;