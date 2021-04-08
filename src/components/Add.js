import React, { useState } from "react";

export const Add = () => {
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        try {
            const response = fetch(`https//:api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false$query=${e.target.value}`);
            const data = response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-600 mx-auto px-20 py-80">
            <input className="w-full h-44 p-10" type="text" placeholder="Search for a movie..." value={query} onChange={onChange} />
        </div>
    );
};
