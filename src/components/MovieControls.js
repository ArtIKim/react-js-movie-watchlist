import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

    return (
        <div className="absolute b-40">
            {type === "watchlist" && (
                <>
                    <button className="cursor-pointer" onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="cursor-pointer" onClick={() => removeMovieFromWatchlist(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
            {type === "watched" && (
                <>
                    <button className="cursor-pointer" onClick={() => moveToWatchlist(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="cursor-pointer" onClick={() => removeFromWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};
