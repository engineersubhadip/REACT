import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';

function App() {
  return (
	<>
		<Header/>
		<Header/>
		<UserProfile name="Subhadip" age="29" place="India"/>
		<UserProfile name="Nikhil" age="29" place = "Achen"/>
		<Header/>
		<Footer />
	</>
  );
}

export default App;
