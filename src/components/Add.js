import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const getMovies = async (query) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const onChange = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        const data = await getMovies(e.target.value);
        console.log(data.results);

        setResults(data.results);
    };

    return (
        <div className="max-w-600 mx-auto px-20 py-80">
            <input className="w-full h-44 p-10" type="text" placeholder="Search for a movie..." value={query} onChange={onChange} />

            {results.length > 0 ? (
                <ul className="default mt-20">
                    {results.map((movie) => (
                        <li key={movie.id}>
                            <ResultCard movie={movie} />
                        </li>
                    ))}
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};
