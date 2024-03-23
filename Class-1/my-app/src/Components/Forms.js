import { useState } from "react";

let Forms = function(){

    let [firstName,setFirstName] = useState("");
    
    let updateFirstName = function(e){
        let currChar = e.target.value[e.target.value.length-1];
        if (currChar === "@"){
            console.log("Special Character @ is not allowed");
            return;
        }else{
            setFirstName(e.target.value);
        }
        // if(e.target.value !== "@" ){ // By doing this check we are ensuring that when the user is typing "@" we are not showing that in the UI. Because we have control over the UI.
        //     console.log("Getting triggered")
        //     setFirstName(e.target.value);
        // }
        // if (e.target.value.length > 5){
        //     console.log(firstName);
        //     console.log("Not valid");
        //     return;
        // }
        // setFirstName(e.target.value);
        // console.log(firstName);
    }

    return (
        <div>
            <h3>This is a Form Component</h3>
            <form>
                <label htmlFor="fName">Please enter first name </label>
                <input type="text" id="fName" value={firstName} onChange={updateFirstName}></input>
            </form>
        </div>
    )
}

export default Forms;