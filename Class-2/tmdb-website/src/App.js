import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import Pagination from './Components/Pagination';

function App() {
  return (
    <>
		<Navbar/>
		<Banner />
		<Movie />
		<Pagination />
		<h3>Welcome to the TMDB Website</h3>
	</>
  );
}

export default App;
