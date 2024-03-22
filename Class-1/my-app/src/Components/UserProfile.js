let UserProfile = function(props){
    console.log(props);
    return(
        <div>I am {props.name}, of age {props.age} living in {props.place}</div>
    )
}

export default UserProfile;