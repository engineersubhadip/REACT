let Products = function(){
    let product = [
        {id:285,name:"Laptop",price:"90K"},
        {id:312,name:"Monitor",price:"20K"},
        {id:466,name:"Mobile",price:"55K"},
        {id:387,name:"Headphones",price:"4K"}
    ]
    return (
        <div>
        {
            product.map(function(ele){
                return <div>{ele.name}</div>
            })
        }
        </div>
        // <div>{product[1].name}</div>
    );
};

export default Products;