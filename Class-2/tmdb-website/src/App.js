import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import Pagination from './Components/Pagination';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Watchlist from './Components/Watchlist';
import Movielist from './Components/Movielist';
import MovieDetail from './Components/Moviedetail';

function App() {
  return (
    <>
		<BrowserRouter>
		<Navbar />

		<Routes>
			{/* This is the Home Page Route */}
			<Route path="/" element={
				<>
					<Banner/>
					<Movielist/>
					<Pagination />
				</>
			}>
			</Route>

			{/* This is the Watchlist Route */}
			<Route path="/watchlist" element={
					<Watchlist />
			}>

			</Route>

			{/* This is for Movie Detail Page */}

			<Route path="/movieDetail/:id" element={
				<MovieDetail />
			}>

			</Route>
      	</Routes>

  		</BrowserRouter>
		{/* <Navbar/>
		<Banner />
		<Movie /> */}
		
		{/* <h3>Welcome to the TMDB Website</h3> */}
	</>
  );
}

export default App;
