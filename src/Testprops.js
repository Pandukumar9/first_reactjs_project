function Testprops(props) {
    console.log(props)
    return(
        <>
                <h1>hi this props test page</h1>
                <p style={{display: 'flex' , gap:20}}>{props.children}</p>
        </>

    )
}

export default Testprops;