import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";

function Movielist(){

    let [movies,setMovies] = useState([]);

    useEffect(function(){
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=684a5e1c0a061b97c5014def1d3f05d6')
        .then(function(res){
            // console.log(res.data.results);
            setMovies(res.data.results);
        })
    },[]);
    
    return (
        <div>
            <h3 className="text-3xl font-bold text-center p-[3rem] text-cyan-800">Trending Movies</h3>

            <div className="flex flex-wrap justify-around">
            
                {
                    movies.map(function(ele){
                        return <Movie title={ele.title}/>
                    })
                }

            </div>

        </div>
    )
}

export default Movielist;