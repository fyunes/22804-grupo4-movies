import React from "react";
import { useState, useEffect } from "react";
import axios from '../axios';
import requests from "../requests";
import html2canvas from 'html2canvas';
import '../css/Poster.css';

function Poster() {
  const [movies, setMovies] = useState([]);
  const fetchURL = requests.fetchNetflixOrginals;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();    
  }, [fetchURL]);

  const Descargar = (e) => {
    const poster = document.querySelector("#poster");
    html2canvas(poster, { allowTaint: true, useCORS: true }).then(function (canvas) {
      let img = canvas.toDataURL("poster/jpg");
      let link = document.createElement("a");
      link.download = "poster.jpg";
      link.href = img;
      link.click();
    });

  }

  return (
    <div className="container-fluid">
      <div className="tile bg-dark row" id='poster'>
        {movies.map((movie) => (
          <div className="card bg-transparent border-0 size">
            <img
              className="border m-2"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
        <div className='texto'>
          <h1 className="text-center">REACTFLIX</h1>
        </div>
      </div>
      <div className="">
        <button onClick={Descargar} type="button" className='btn btn-primary mt-4 mb-4'>Descargar</button>
      </div>
    </div>
  );
}

export default Poster;
