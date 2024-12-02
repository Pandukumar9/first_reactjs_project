function Testprops(props) {
    console.log(props)
    // <></> same <React.Fragment></React.Fragment> it will not add div in dom like ng-contianer
    return(

        <> 
                <h1>hi this props test page</h1>
                <p style={{display: 'flex' , gap:20}}>{props.children}</p>

                <div style={{display: 'flex', gap: 30}}>
                    <Flexitems />
                </div>
        </>



    )
}

export default Testprops;

// inside js we can n number of functions
function Flexitems() {
    return (
        <>
          <div>div 1</div>
          <div>div 2</div>
          <div>div 3</div>
        </>
    )
}