import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState = {
    watchlist: JSON.parse(localStorage.getItem("MOVIE_APP_WATCHLIST")) || [],
    watched: JSON.parse(localStorage.getItem("MOVIE_APP_WATCHED")) || [],
};

// Global Context
export const GlobalContext = createContext(initialState);

// Global Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("MOVIE_APP_WATCHLIST", JSON.stringify(state.watchlist));
        localStorage.setItem("MOVIE_APP_WATCHED", JSON.stringify(state.watched));
    }, [state]);

    // Actions
    const addMovieToWatchlist = (movie) => {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHLIST",
            payload: movie,
        });
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({
            type: "REMOVE_MOVIE_FROM_WATCHLIST",
            payload: id,
        });
    };

    const addMovieToWatched = (movie) => {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHED",
            payload: movie,
        });
    };

    const moveToWatchlist = (movie) => {
        dispatch({
            type: "MOVE_TO_WATCHLIST",
            payload: movie,
        });
    };

    const removeFromWatched = (id) => {
        dispatch({
            type: "REMOVE_FROM_WATCHED",
            payload: id,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
