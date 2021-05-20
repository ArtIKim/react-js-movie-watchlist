import React, { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { GlobalContext } from "../context/GlobalState";

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

    return (
        <div className="px-20">
            <div>
                <h1>My Watchlist</h1>

                {watchlist.length > 0 ? (
                    <div className="grid grid-cols-5 gap-20">
                        {watchlist.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} type={"watchlist"} />
                        ))}
                    </div>
                ) : (
                    <h1>No movies in your watchlist. Add some!</h1>
                )}
            </div>
        </div>
    );
};
