import './../Styles/Puppy.css'
import Puppy_Description from './Puppy_Description';

let Puppy = function(props){
    let text = props.text;
    let imageURL = props.imageSrc;
    let customStyle = {color:"red",fontSize:"1.5rem"};

    return(
        <div className="first">
            <h3 style={customStyle}>Welcome to {text}</h3>
            <img src={imageURL} alt="#"></img>
            <Puppy_Description description={props.description}/>
            
        </div>
    )
}

export default Puppy;