import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./scss/index.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/watchlist">
                        <Watchlist />
                    </Route>

                    <Route exact path="/watched">
                        <Watched />
                    </Route>

                    <Route exact path="/add">
                        <Add />
                    </Route>
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
