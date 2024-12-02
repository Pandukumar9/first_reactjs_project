import './App.css';
// import React from 'react';
// import Header from './Header';
import '.'
//this is funcitonal components we use this only real case
function App() {
  return (
    <>
    <ul>
      <li>Home 2</li>
      <li>Contact us 2</li>
    </ul>
    <div className="wraaper">
      <h1>Back gorun color changer</h1>
      <input type="color" onChange={(e) => {
         document.body.style.background = e.target.value;
      }}/>
    </div>
    </>
  );
}

export default App;

//this is class component and this is not use in real case
// class Menu extends React.Component{
//    render(){
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     )
//    }
// }

// export default Menu;
