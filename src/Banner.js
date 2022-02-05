import React from 'react'
import {useState,useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import "./Banner.css"

export default function Banner() {
    const[movies,setMovie]=useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ])
            return request;
        }
        fetchData();
    },[])
    
    function truncate(str,n){
        return str?.length > n ?str.substr(0,n-1)+"..." : str;
    } 

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
            )`,
            backgroundPosition:"center"
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <h3 className="banner_description">
                    {truncate(movies?.overview,150)}
                </h3>



            </div>
 

        </header>
    )
}
