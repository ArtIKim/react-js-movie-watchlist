import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;

    return (
        <div className="flex mt-20">
            {movie.poster_path ? (
                <img className="max-w-full w-150 h-full object-cover" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ) : (
                <div className="bg-secondary w-150 h-255"></div>
            )}
            <div className="ml-20 flex flex-col justify-between">
                <div>
                    <div className="font-extrabold">{movie.title}</div>
                    <div>{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</div>
                </div>
                <button className="cursor-pointer w-200 h-44 bg-secondary text-white border-none rounded-5" disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
                    Add to Watchlist
                </button>
            </div>
        </div>
    );
};
