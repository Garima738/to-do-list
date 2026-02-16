

import {useState} from 'react';
export default function Search(){
    const[find,setFind] = useState("");
    const name = ["Dennis","Ritchie","Paul","Frank"];
    const student = name.filter()
    return(
        <div>
            <h2>
                Demo to show Search
            </h2>
            <input type="textplaceholder='Enter key to search"
            value= {find}
            onChange = {(e)=>setFind(e.target.value)}/>
            <ul>
        {student.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            
          </li>
        ))}
      </ul>


        </div>
    )
}