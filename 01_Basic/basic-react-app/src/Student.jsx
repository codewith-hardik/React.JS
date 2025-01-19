import {Name, Study } from "./AboutMe";
import "./Student.css"

function Student ({name,clg,from="Gujarat",cours,rank,skill,skillO}){
    let listSkills = skill.map(((s) => <li>{s}</li>));
    return (
        <div className="Student">
            <h2>{name}</h2>
            <p>Hi, I am {name} From {from},Gujarat, Study BE in {cours} From {clg}.ACPC Rank {rank} </p>
            {/* <p>Skills : {skill}</p> */}
            <p>Skills : {listSkills}</p>
            {/* <p>Skill : {skillO.a}</p> */}
        </div>
    );
}
export default Student;