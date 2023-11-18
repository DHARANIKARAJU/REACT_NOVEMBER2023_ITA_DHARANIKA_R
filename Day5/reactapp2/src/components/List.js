import React ,{useState} from "react";

function EmployeeDetails()
{
    const [Emp]=useState(
    [    
        {
            id:12,
            name:"xxx",
            salary:190384,
        },
        {
            id:13,
            name:"yyy",
            salary:573457,
        },
        {
            id:14,
            name:"zzz",
            salary:184645,
        },
    ]
    );

    return(
        <div>
            <h1>Employee Details</h1>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                </tr>
                {Emp.map((em)=>(
                    <tr key={em.id}>
                        <td>{em.id}</td>
                        <td>{em.name}</td>
                        <td>{em.salary}</td>
                    </tr>
                    ))}
            </table>
        </div>
    )
};

export default EmployeeDetails;