import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EmpRegistration() {
    let navigate = useNavigate();
    const [employee, setemployee] = useState({
        name:"",
        username:"",
        password:"",
        mobile:""
    })

    const{name, username, password, mobile} = employee

    const onInputChange=(e)=>{
setemployee({...employee,[e.target.name]: e.target.value})
    }

    const save=async(e)=>{
        e.preventDefault();

     await axios.post("http://localhost:8381/employee/register", employee)
        navigate('/')
        

    }
  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Customer Registration</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="name"
                    value={name} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your email'
                    name="username"
                    value={username} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"password"}
                    className="form-control"
                    placeholder='Enter your password'
                    name="password"
                    value={password}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"number"}
                    className="form-control"
                    placeholder='Enter your panNo'
                    name="mobile" 
                    value={mobile} 
                    onChange={(e)=>onInputChange(e)} />
                    </div>


                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    &nbsp;
                    <button type='submit' className='btn btn-outline-danger'>Cancel</button>
                </form>
                
            </div>
        </div>
    </div>
    </div>
  )
}
