
    // function handleClick(name){
    //     alert(`pressed button, ${name}`);
        

    // }
  
        // <>
        // <h1>Event Handling</h1>
        // {/* <button onClick={handleClick} > Click Me </button> */}
        //  <button onClick={()=>handleClick("Garima")} > Click Me </button>
        // </>

// export default function EventToDo(){
//     function handleClick(){
//         alert("You pressed button");

//     }
//     return(
//         <>
//         <h1>Event Handling</h1>
//         <button onClick={handleClick()} > Click Me </button> //round bracket humare clcik krne se phele hi alert de dega
//         </>
//     )
// }

// function handleSubmit(e){ //e = event.
//     e.preventDefault(); //for if we u want that page reload not happen.But in a React app, we don’t want the page to reload.
// //We want to handle the data ourselves.
// const input = e.target.task; //read task box value.
// const taskValue = input.trim(); //Spaces at the start and end are removed.
// if(taskValue ===""){
//     alert("Task can not be empty");
//     return;

// }
// const li = document.createElement("li");

// li.innerHTML = `<span>${taskValue}</span> 
// <button  class ="deleteBtn">Delete</button> ;` //we want to concatenate static value


// document.getElementById("taskList").appendChild(li); 


// }
// function handleClickList(e){
//     if(e.target.classList.contains("deleteBtn")){
//         e.target.parentElement.remove();
//     }
// }





//   return(
//         <div>
//             <h1>To Do App</h1>
//         <button onClick={()=>handleClick("Garima")}>Click Me</button>

//         <form onSubmit={handleSubmit}>
//             <input type="text" name="task" placeholder="Add your task here"/>
//             <input type="submit">Add Task</input>
//         </form>
//          <ul id = "taskList" onClick={handleClickList}> 




//          </ul >

//         </div>
//     )
// }



// 
import "./EventToDo.css"
import { useState } from "react";//React ka hook import kar rahe ho.useState → component me data store (state) karne ke liye.
export default function EventToDo(){
const[task,setTask]=useState("");
//task → input box ki current value.
//setTask → task ko update karne ke liye.
//"" → initial value empty.

   const[tasks,setTasks]=useState([]);



 function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }


    return(
        <>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" class name = "taskItem">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
);
}






