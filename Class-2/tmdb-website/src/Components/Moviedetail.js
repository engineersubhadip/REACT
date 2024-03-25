import {useState,useEffect} from 'react';

function MovieDetail(props){
    let [movieID,setMovieID] = useState(null);
    
    useEffect(function(){
        let currentURL = window.location.href;
        let updatedURL = currentURL.split('/');
        let updatedID = updatedURL[updatedURL.length-1];
        setTimeout(function(){
            setMovieID(updatedID);
        },5000);
    },[]);


    if(movieID===null){
        return <div>Loading...</div>
    }

    return(
        <div>This is the Movie Detail Component</div>
    )
}

export default MovieDetail;