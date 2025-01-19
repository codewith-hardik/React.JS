// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
// import Name from './Name';
import { Name } from './Name';
function From() {
  return <h3>Ahmedabad, Gujarat</h3>
}
import Student from './Student';
import Msg from './Msg';

function App() {
  // const [count, setCount] = useState(0)
  let skillArr = ["English", "Communication", "Leadership", "Coding", "Time Management"];
  // let skillArr = [<li>English</li>,<li>Communication</li>,<li>Leadership</li>,<li>Coding</li>,<li>Time Management</li>];
 let skill2 = ["English"];

  let skillObj = {a:"problem Solving", b:"Coding", c:"WebDev", d: "Time Management", e:"Communication" }
  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

  //  <>
  //     <Name/>
  //     <From/>
  //  </>

  <>
  <Student name="Hardik" clg="VGEC" from="Dhandhuka" rank={1729} cours="CSE" skill={skillArr} skillO={skillObj}/>
  <Student name="Dharmik" clg="VGEC" from="Ahmedabad" rank={2000} cours="CSE" skill={skill2} skillO={skillObj}/>
  <Msg />
  {/* <Student name="Vivek" clg="VGEC" from="Botad" rank={1800} cours="CSE"/>
  <Student name="Prince" clg="VGEC" from="Dhandhuka" rank={2500} cours="EE"/>
  <Student name="Sumit" clg="LJ-Morbi" from="Dhandhuka" rank={8000} cours="IT"/>
  <Student name="Dharmik" clg="VGEC" from="Ahmedabad" rank={2000} cours="IT"/>
  <Student name="Aryan" clg="LD"  rank={1500} cours="CSE"/>
  <Student name="Mitesh" clg="MSU" from="Dhandhuka" rank={1300} cours="CSE"/>   */}
 
  </>
   
  );
}

export default App
