import {useState,useEffect} from 'react';
import axios from 'axios';

function MovieDetail(props){
    let [movieResponse,updateResponse] = useState({});
    
    useEffect(function(){
        let currentURL = window.location.href;
        let updatedURL = currentURL.split('/');
        let updatedID = updatedURL[updatedURL.length-1];
        axios.get(`https://api.themoviedb.org/3/movie/${updatedID}?api_key=684a5e1c0a061b97c5014def1d3f05d6`)
        .then(function(res){
            
            let title = res.data.title;
            let img = `https://image.tmdb.org/t/p/original/${res.data.backdrop_path}`;
            let descp = res.data.overview;
            let rating = Math.round(res.data.vote_average,2);
            
            updateResponse({title:title,image:img,description:descp,rating:rating});
        })
    },[]);


    return(
        <div className='flex justify-center gap-20 p-[2rem]'>
            <div className='h-[60vh] rounded-lg  min-w-96 bg-center bg-cover' style={{backgroundImage:`url(${movieResponse.image})`}}></div>

            <div className='flex flex-col justify-between'>
            <div className='text-2xl font-bold text-cyan-800'>{movieResponse.title}</div>
            <div className='text-cyan-800'>{movieResponse.description}</div>
            <div className='text-xl font-bold text-cyan-800'>Rating : {movieResponse.rating}/10</div>
            </div>

        </div>
    )
}

export default MovieDetail;