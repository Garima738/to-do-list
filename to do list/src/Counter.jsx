import {useState} from 'react'




export default function Counter(){

//State = data jo component ke andar change hota hai aur screen ko update karta hai.
//function is stateless.
//hooks---special React functions jo functional components me features use karne dete hain.


//var count = 0;

const [ count,setCount] = useState(0);  //way to create state. if we want to give default value we have to pass it on useState(0).
function handleIncrement(){
    setCount(count=>count+1); //instead of count++ we need to do like this.
    //count++;
    console.log(count);

}
function handleDecrement(){//to see the decrement and increment on the web page we use state function variable k saath saath uska setter bhi bnayege.
    //count--;
    if(count == 0){
        alert("Can't Decrease now")
        return;
    }
        setCount(count=>count-1); //=> use this instead of = as if we use = we see error on run time.
    console.log(count);

}

    return(
        <div>
            <h1>
                Counter APP
            </h1>

            <h3>Count = {count}</h3>
            <button onClick= {handleIncrement}>   + </button>
            <button onClick={handleDecrement}> - </button>
        </div>

    );
}