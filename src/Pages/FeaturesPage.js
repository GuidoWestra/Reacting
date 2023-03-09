import React, { useEffect } from 'react';
import axios from "axios";
import '../App.css';

let baseURL = "https://www.omdbapi.com"
let ApiKey = "a53e0dda";
let Query = "tt7178924";

export default function FeaturesPage() {

    async function fetchMovies() {
        let moviesData = await axios
            .get(`${baseURL}?i=${Query}&apikey=${ApiKey}`)
            .then((res) => res.data)
            .catch((e) => console.log('Error:', e))

        console.log(moviesData)
        return moviesData
    }

    useEffect(() => {
        fetchMovies();
        console.log('load')
    }, [])

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
