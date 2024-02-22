let TodoList = function(todoprops){
    console.log(todoprops.data);
    let data = todoprops.data.map(function(ele){
        return(
            <li>{ele.data}</li>
        )
    });
    return(
        <ul>{data}</ul>
    )
}

export default TodoList;