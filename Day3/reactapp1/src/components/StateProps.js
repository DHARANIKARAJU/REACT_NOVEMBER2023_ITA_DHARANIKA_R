import { useState } from "react";
function StateProps()
{
    const[name,setName]=useState("John");
    const[num,setNum]=useState(12);
    const[student,setStudent]=useState({name:"Mike",age:17});
    const nameHandler =()=>
    {
            setName("Mike");
    }
    const numHandler =()=>
    {
            let value=num;
            setNum(++value);
    }
    const studentHandler=()=>
    {
        setStudent({name:"Kane",age:19});
    }
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>The Number is {num}</h2>
            <h2>
                Student name is {student.name} and age is{student.age};
            </h2>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={numHandler}>Change Number</button>
            <button onClick={studentHandler}>Change Details</button>
        </div>
    );
}
export default StateProps;