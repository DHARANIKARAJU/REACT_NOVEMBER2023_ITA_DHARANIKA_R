import {useState,useEffect} from "react";
const FunctionalLifecycleExample=()=>
{
    //State initialization
    const[count,setCount]=useState(0);
    //Mounting phase-Equivalent to componentDidMount in class component
    useEffect(()=>{
        console.log("Component is mounted!");
        //cleanup function (equivalent to componentWillUnmount in class component)
        return()=>
        {
            console.log("Component will unmount");
        }
    },[]);//empty dependency array means it only runs once after the initial render
    //updating phase-equivalent to componentDidUpdate in class component
    useEffect(()=>
    {
        console.log("component has been updated");
    })
}
export default FunctionalLifecycleExample;