import { useState } from "react";

export default function Form() {
//   let [fullname, setFullname] = useState("Hardik");
//   let handleNameChange = (event) => {
//     setFullname(event.target.value);
//   };

    let [formData,setFormData] = useState({
        fullname: "",
        username:"",
        password: ""
    });

    let handleInputChange = (event) =>{
        setFormData((currData)=>{
            return {...currData, [event.target.name] : event.target.value};
        });
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullname: "",
            username:"",
            password: ""
        })
    }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="fullname">FullName :</label>&nbsp;
      <input
        type="text"
        name="fullname"
        id="fullname"
        value={formData.fullname}
        onChange={handleInputChange}
        placeholder="Enter Full Name"
      />
      <br /><br />
      <label htmlFor="username">Username :</label>&nbsp;
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Enter Username"
      />
       <br /><br />
      <label htmlFor="username">Password :</label>&nbsp;
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter password"
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
