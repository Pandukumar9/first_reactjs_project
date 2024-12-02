function Destructprops({id, name,actprice,dprice}){  //means some times we will get more property in this moment we need to take required fields 
    return (
       <div>
        <h2>id:{id}</h2>
        <h2>name:{name}</h2>
        <h2>actual price:{actprice}</h2>
        <h2>other price:{dprice}</h2>
       </div>
    )
}

export default Destructprops;