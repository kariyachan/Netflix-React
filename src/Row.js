import React from 'react'
import {useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'

export default function Row({title,fetchUrl}) {
    const base_url="https://image.tmdb.org/t/p/original/"
    const[movies,setMovies]=useState([])
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])
    // console.log(movies);

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img className="row_poster" src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
           
        </div>
    )
}
