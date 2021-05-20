import React, { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { GlobalContext } from "../context/GlobalState";

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="px-20">
            <div>
                <h1>My Watched Movies</h1>

                {watched.length > 0 ? (
                    <div className="grid grid-cols-5 gap-20">
                        {watched.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} type={"watched"} />
                        ))}
                    </div>
                ) : (
                    <h1>No movies in your watched list. Add some!</h1>
                )}
            </div>
        </div>
    );
};
