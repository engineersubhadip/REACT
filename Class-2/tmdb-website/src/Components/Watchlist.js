import { Link } from "react-router-dom";

function Watchlist(){
    return (
        <>
        <Link to="/watchlist" className="font-bold text-2xl ml-20 cursor-pointer text-cyan-800">Watchlist</Link>
        </>
    )
}

export default Watchlist;