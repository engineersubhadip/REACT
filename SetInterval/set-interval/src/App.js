import "./App.css";
import StopWatch from "./Components/StopWatch";
import {useState} from 'react'


function App() {
	let [isVisible,checkVisibility] = useState(true);

    let setVisibility = function(){
        checkVisibility(!isVisible);
    }

	return (
		<div className="App">
			<input type='checkbox' onChange={setVisibility} /> Toggle Visibility
			{/* {isVisible ? <StopWatch /> : null}   This is used to remove element from the DOM*/}
			{/* {isVisible ? <StopWatch/> : <div className="makeInvisible"><StopWatch/></div>} */}
			<div className={isVisible ? null : "makeInvisible"}>
				<StopWatch/>
			</div>
		</div>
	);
}

export default App;
