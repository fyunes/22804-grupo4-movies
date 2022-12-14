import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Row.css";

// url para imagenes
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchURL]);

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			<div className="poster__description">
				<i className="fa-solid fa-star"></i>
				{movie.vote_average}

				<p>{movie.name}</p>
			</div>;
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="posters">
				{movies.map((movie) => (
					<div className="">
						<div className="poster__container">
						<img
							key={movie.id}
							className="poster"
							src={`${base_url}${movie.poster_path}`}
							onClick={() => handleClick(movie)}
							alt={movie.name}
						/>
						<div className="poster__description">
							<i className="fa-solid fa-star"></i>{movie.vote_average}
							<p className="poster__texto">{movie.name || movie.title}</p>
						</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Row;
