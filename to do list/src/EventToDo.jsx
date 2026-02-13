
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

export default function EventToDo(){

    const[task,setTask] = useState("");
        const[tasks,setTasks] = useState([]);


function handleSubmit(e){
    e.preventDefault();

    const taskValue = e.target.task.value.trim();

    if(taskValue === ""){
        alert("Task cannot be empty");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    
}

function handleClickList(e){
    if(e.target.classList.contains("deleteBtn")){
        e.target.parentElement.remove();
    }
}


return (
    <div>
        <h1>To Do App</h1>

       

        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="Enter Task"
            value ={}
            
            />
            <button type="submit" value="Add Task" />
        </form>

        <ul id="taskList" onClick={handleClickList}></ul>
    </div>

);
}





