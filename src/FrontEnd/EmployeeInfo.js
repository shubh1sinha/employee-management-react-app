import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function EmployeeInfo() {

    const[employee, setemployee] = useState({
        name:"",
        username:"",
        password:"",
        mobile:""
    })

    const {id}  = useParams();

    useEffect(()=>{
        loademployee()
    },[])
    const loademployee = async ()=>{
        const result = await axios.get(`http://localhost:8381/employee/info?username=${id}`)
        setemployee(result.data)
    }


  return (
    <div>
        <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>employee Infromation</h2>
            <div className='card'>
                <div className='card-header'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Name: &nbsp;{employee.name}</b>
                        </li>
                        <li className='list-group-item'>
                            <b>Username: &nbsp;{employee.username}</b>
                        </li>
                        <li className='list-group-item'>
                            <b>Password:&nbsp;{employee.password}</b>
                        </li>
                        <li className='list-group-item'>
                            <b>Mobile:&nbsp;{employee.mobile}</b>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-danger my-2" to={`/dashboard/${id}`}>Home</Link>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
