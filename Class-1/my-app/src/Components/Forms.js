import { useState } from "react";

let Forms = function(){

    let [firstName,setFirstName] = useState("");

    let [lastName,setLastName] = useState("");
    
    let updateFirstName = function(e){
        /*
        // ! If the user types in @
        let currChar = e.target.value[e.target.value.length-1];
        if (currChar === "@"){
            console.log("Special Character @ is not allowed");
            return;
        }else{
            setFirstName(e.target.value);
        }
        */

        if (e.target.value.length > 5){
            alert("First Name cannot be more than 5 characters");
            return;
        }else{
            setFirstName(e.target.value);
        }
    }

    let updateLastName = function(e){
        if(e.target.value.length > 8){
            alert("Last Name cannot be greater than 8 characters");
            return;
        }else{
            setLastName(e.target.value);
        }
    }

    return (
        <div>
            <h3>This is a Form Component</h3>
            <form>
                <label htmlFor="fName">Please enter first name </label>
                <input type="text" id="fName" value={firstName} onChange={updateFirstName}></input>
                <br></br>
                <br></br>
                <label htmlFor="lName">Please enter last name</label>
                <input type="text" id="lName" value={lastName} onChange={updateLastName}></input>
            </form>
        </div>
    )
}

export default Forms;