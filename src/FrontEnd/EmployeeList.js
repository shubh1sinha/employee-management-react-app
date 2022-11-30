import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function EmployeeList() {
    let navigate = useNavigate();
    const [employee, setemployee] = useState([])
    useEffect(()=>{
        loademployee();
    }, []);

    const loademployee=async()=>{
        const response = await axios.get("http://localhost:8381/employee/list");
        console.log(response)
        setemployee(response.data);
    }

    const {id} = useParams()
    function deleteEmployee(employeeId){
        axios.get(`http://localhost:8381/employee/delete?id=`+employeeId)
        window.location.reload() 
     }

  return (
    <div>
        <div className='contaimer'>
            <div className='container'>
            <div className='py-4'>
            <table class="table border shadow">
        <thead className='table-dark'>
        <tr>
          <th scope="col">S No</th>
          <th scope="col">Employee Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {
            employee.map((employee, index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{employee.employeeId}</td>
                <td>{employee.Name}</td>
                <td>{employee.username}</td>
                <td>{employee.mobile}</td>

                { <td>
                    <Link className='btn btn-info mx-2' to={`/employee/info/${employee.username}`}>employee-Info</Link>
                    
                    {(()=>{
                        return(<button className='btn btn-danger mx-2' onClick={() => deleteEmployee(employee.employeeId)} >Delete</button>)

                    })()}
                    
                    
                </td> }
                </tr>
            ))
        }
        </tbody>
        </table>
            </div>
        </div>
        </div>
    </div>
  )
}
