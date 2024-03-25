import Movie from "./Movie";

function Movielist(){
    return (
        <div>
            <h3 className="text-3xl font-bold text-center p-[3rem] text-cyan-800">Trending Movies</h3>

            <div className="flex flex-wrap justify-around">
            
                <Movie/>

            </div>

        </div>
    )
}

export default Movielist;