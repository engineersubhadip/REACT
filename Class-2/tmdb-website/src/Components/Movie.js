function Movie(props){
    return(
            <div className="h-[50vh] w-[200px] bg-center bg-cover rounded-md m-6 hover:scale-105 duration-300 cursor-pointer flex items-end overflow-hidden"
            style={{backgroundImage:`url(https://m.media-amazon.com/images/M/MV5BYjQxMWY5NjgtNDI2NS00MWM2LTg2MDAtNjI5NGIwZTNmYWZiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg)`}}>
                <div className="w-full text-center bg-neutral-900/60 text-white p-2 text-xl">
                    {props.title}
                </div>
            </div>
    )
}

export default Movie;