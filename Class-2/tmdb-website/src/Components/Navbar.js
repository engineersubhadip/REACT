import Watchlist from "./Watchlist";

function Navbar(){
    return(
        <div>
            <div>
                <img src="https://www.vhv.rs/dpng/d/500-5002380_icon-film-film-icon-hd-png-download.png" alt="Movie Icon" />
                <div className="text-3xl font-bold underline">Movies</div>
                <Watchlist />
            </div>
        </div>
    )
}

export default Navbar;