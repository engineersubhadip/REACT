import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import Pagination from './Components/Pagination';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
		<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={
				<>
					<Banner/>
					<Movie />
				</>
			}>
			</Route>
      	</Routes>
  		</BrowserRouter>
		{/* <Navbar/>
		<Banner />
		<Movie /> */}
		{/* <Pagination /> */}
		{/* <h3>Welcome to the TMDB Website</h3> */}
	</>
  );
}

export default App;
