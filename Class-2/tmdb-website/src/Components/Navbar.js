import { Link } from "react-router-dom";
import Watchlist from "./Watchlist";

function Navbar(){
    return(
        <div>
            <div className="flex items-center p-5">
                <img className="h-[50px] rounded-full mr-10" src="https://www.vhv.rs/dpng/d/500-5002380_icon-film-film-icon-hd-png-download.png" alt="Movie Icon" />
                <Link to="/" className="font-bold text-2xl ml-10 cursor-pointer font-bold text-cyan-800">Movies</Link>
                <Watchlist />
            </div>
        </div>
    )
}

export default Navbar;