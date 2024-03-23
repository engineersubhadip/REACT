import { useState } from "react";

let Forms = function(){

    let [firstName,setFirstName] = useState("");
    
    let updateFirstName = function(e){
        // if(e.target.value !== "@" ){ // By doing this check we are ensuring that when the user is typing "@" we are not showing that in the UI. Because we have control over the UI.
        //     console.log("Getting triggered")
        //     setFirstName(e.target.value);
        // }
        setFirstName(e.target.value);
        // console.log(e.target.value);
        // setFirstName(e.target.value);
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