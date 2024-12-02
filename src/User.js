
function User(props) {
    console.log(props);

    return (
        <div style={{border: '1px solid red' ,width:600}}>
          <h1>User id : {props.u.id}</h1>
          <h1>User name : {props.u.name}</h1>
          <h1>User age : {props.u.age}</h1>
          <h1>User place : {props.u.place}</h1>
        </div>
    )
}

export default User;