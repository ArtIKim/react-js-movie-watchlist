import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./scss/index.css";
import "./lib/font-awesome/css/all.min.css";

// e89fe0121ef19c10a5d3c41a61ecbad2
// https://api.themoviedb.org/3/movie/550?api_key=e89fe0121ef19c10a5d3c41a61ecbad2
// eyJhbGciOiJIUzI1NiJ9.
// eyJhdWQiOiJlODlmZTAxMjFlZjE5YzEwYTVkM2M0MWE2MWVjYmFkMiIsInN1YiI6IjYwNmY1M2Q1MWFkOTNiMDA0MGNkY2VlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYiITnk96TiZzv7rhWCGIgujo3A_x_t1Y8zrFZ08y_8

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
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
    );
}

export default App;
