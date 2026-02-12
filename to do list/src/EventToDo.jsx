export default function EventToDo(){
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

function handleSubmit(e){ //e = event.
    e.preventDefault(); //for if we u want that page reload not happen.But in a React app, we don’t want the page to reload.
//We want to handle the data ourselves.
const input = e.target.value; //The text the user typed inside the input.
const inputValue = input.trim(); //Spaces at the start and end are removed.
if(inputValue ===""){
    alert("Task can not be empty");
    return;

}
const li = document.createElement("li");
const ul = document.getElementById("taskList")
li.innerHTML = <span>${inputValue}</span>

}

  return(
        <div>
            <h1>To Do App</h1>
        <button onClick={()=>handleClick("Garima")}>Click Me</button>

        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Add your task here"/>
            <input type="submit">Add Task</input>
        </form>
         <ul id = "taskList" onClick={handleClickList}>



         </ul >

        </div>
    )
}







