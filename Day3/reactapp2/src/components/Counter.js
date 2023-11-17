import {useState} from "react";
const Counter=()=>
{
    const[count,setCount]=useState(0);
    const IncrementHandler=()=>
    {
        let value=count;
        
        setCount(++value);    
    }
    const DecrementHandler=()=>
    {
        let value=count;    
        setCount(--value);
    };
    return(
        <div>
            <h1>The value is:{count}</h1>
            <button onclick={IncrementHandler}>Increment</button>
            <button onclick={DecrementHandler}>Decrement</button>
        </div>
    );
}
export default Counter;