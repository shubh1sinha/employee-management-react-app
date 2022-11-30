import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function AdminRegister() {
    const {id} = useParams()
    let navigate = useNavigate();
    const [admin, setadmin] = useState({
        username:"",
        password:""
    })

    const{username, password} = admin

    const onInputChange=(e)=>{
setadmin({...admin,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

     await axios.post("http://localhost:8381/admin/register", admin)
        navigate('/dashboard/'+id)
        

    }

  return (
    <div>
              <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Admin Login</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your Email'
                    name="username"
                    value={username} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your password'
                    name="password"
                    value={password} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    &nbsp;
                    <Link type='submit' className='btn btn-outline-danger' to='/'>Cancel</Link>
                </form>
            </div>
           
        </div>
    </div>
    </div>
  )
}
