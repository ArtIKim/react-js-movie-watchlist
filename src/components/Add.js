import React, { useState } from "react";
import axios from "axios";

export const Add = () => {
	const [query, setQuery] = useState("");

	const getMovies = async (query) => {
		try {
			const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
			// const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
			const data = await response.json();

			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const onChange = async (e) => {
		e.preventDefault();

		setQuery(e.target.value);

		const results = await getMovies(e.target.value);
		console.log(results);

		// fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	});
	};

	return (
		<div className="max-w-600 mx-auto px-20 py-80">
			<input className="w-full h-44 p-10" type="text" placeholder="Search for a movie..." value={query} onChange={onChange} />
		</div>
	);
};
