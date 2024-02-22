import './../Styles/Puppy.css'
import Puppy_Description from './Puppy_Description';

let Puppy = function(){
    return(
        <div className="first">
            <h3>Welcome to Puppy 1</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-dDhLNGEsRpj4Kwnd-5wgOPsz56F6hykFg&usqp=CAU"></img>
            <Puppy_Description/>
        </div>
    )
}

export default Puppy;