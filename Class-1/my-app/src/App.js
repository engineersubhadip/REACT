import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';
import Counter from './Components/Counter';
import Products from './Components/Products';

function App() {
  return (
	<>
		<Header/>
		<Header/>
		<UserProfile name="Subhadip" age="29" place="India"/>
		<UserProfile name="Nikhil" age="29" place = "Achen"/>
		<Header/>
		<Footer />
		<Counter />
		<Products />
	</>
  );
}

export default App;
