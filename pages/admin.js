import React , {useState, useEffect} from 'react'
import Admin from '../components/movies/admin'
import axios from "axios"

export default function AdminPage(){
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
            <Admin Movies = {movies}/>
        </>
    )
}