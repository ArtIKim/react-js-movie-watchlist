import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
    return (
        <div className="relative">
            {movie.poster_path ? (
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ) : (
                <div className="bg-secondary w-150 h-255"></div>
            )}
            <MovieControls movie={movie} type={type} />
        </div>
    );
};
