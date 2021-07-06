import React , {useState, useEffect} from 'react'
import MoviesFeatured from '../components/movies/featured'
import TopRated from '../components/movies/topRated'
import axios from "axios"


export default function Index(){
    const [movies, setMovies] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8080/apiman-gateway/essaguiar/get_movies_api/1.0')
        .then((res)=> {
            setMovies(res.data.Movies)
        })
        .catch((err)=> {
            console.log(err)
        })
    }, [])
    return (
        <>
            <MoviesFeatured Movies={movies}/>
            <TopRated />
        </>
    )
}