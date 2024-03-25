import { Link } from "react-router-dom";

function Movie(props){
    // console.log(props.id)
    let getDetails = function(movieID){
        // console.log("Element is getting clicked");
        // console.log("Movie ID is",movieID);
    }
    return(
            <Link to={`/movieDetail/${props.id}`} onClick={function(){getDetails(props.id)}} className="h-[50vh] w-[200px] bg-center bg-cover rounded-md m-6 hover:scale-105 duration-300 cursor-pointer flex items-end overflow-hidden"
            style={{backgroundImage:`url(${props.poster_path})`}}>
                <div className="w-full text-center bg-neutral-900/60 text-white p-2 text-xl">
                    {props.title}
                </div>
            </Link>
    )
}

export default Movie;