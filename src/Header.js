import React from 'react';
import './Header.css';
import User from './User';
import Testprops from './Testprops';

let inStyle = {
    color: 'pink',
    fontWeight: 'bold'
}

let users = [
    { id:1 , name:'pandu' , age:32 ,place:'warangal'},
    { id:2 , name:'laddu' , age:32 ,place:'hnk'},
    { id:3 , name:'madhu' , age:32 ,place:'hyderabad'},
]

function Header() {
        // Define a function to handle button click
        const handleButtonClick = () => {
            alert('Button clicked!');
        };
    
    return (
        // <></> or <div></div> we should use means it should return single element then only it will works
        <>
        <ul>
            <li className='test'>Home</li>
            <li>Contact us</li>
        </ul>

         <button onClick={handleButtonClick}>Click Me</button>

         <p style={inStyle}>pandu</p>
          {
            users.map((u) => {
                return  <User key={u.id} u={u}/>
            })
          }

          <Testprops name="xyz">
            <button>Like</button>
            <button>Share</button>
            <button>Subscribe</button>
          </Testprops>
        </>
    )
            //  <User name='pandukumar' age="25"/>

}

export default Header;