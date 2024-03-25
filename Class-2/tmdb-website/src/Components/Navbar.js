import Watchlist from "./Watchlist";

function Navbar(){
    return(
        <div>
            <div className="flex">
                <img className="h-[50px] rounded-full" src="https://www.vhv.rs/dpng/d/500-5002380_icon-film-film-icon-hd-png-download.png" alt="Movie Icon" />
                <div className="font-bold text-3xl cursor-pointer font-bold text-cyan-800">Movies</div>
                <Watchlist />
            </div>
        </div>
    )
}

export default Navbar;