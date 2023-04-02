import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css';

let baseURL = "https://www.omdbapi.com"
let ApiKey = "a53e0dda";
let Query = "tt7178924";

export default function FeaturesPage() {
    const [movies, setMovies] = useState();


    async function fetchMovies() {
        let moviesData = await axios
            .get(`${baseURL}?i=${Query}&apikey=${ApiKey}`)
            .then((res) => res.data)
            .catch((e) => console.log('Error:', e))

        console.log(moviesData)

        if (!moviesData) {
            return null
        } else {
            setMovies(moviesData)
            console.log(movies)
        }
    }

    useEffect(() => {
        // fetchMovies();
        // console.log('load')
    }, [movies])


    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            Fetching Movies
        </div >
    )
}




