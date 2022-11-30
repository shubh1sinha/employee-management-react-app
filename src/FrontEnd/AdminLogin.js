import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function AdminLogin() {

    let navigate = useNavigate();
    const [admin, setUser] = useState({
        username: '',
        password: '',
  
    })
    const [errorMessage, setErrorMessage] = useState('');
  
    const{username, password} = admin
  
    const onInputChange=(e)=>{
  setUser({...admin,[e.target.name]: e.target.value})
    }
  
    const save=async(e)=>{
        e.preventDefault();
  
        const res = await axios.get("http://localhost:8381/admin/login?username="+username+"&password="+password)
        if(res.data.status === 'admin'){
          navigate('/dashboard/'+username)
        }
        else{
          navigate('/')
          setErrorMessage(res.data.status)
        }
    
        
    }


  return (
    <div><div>
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
    
    {errorMessage && (
  <p className="text-danger"> {errorMessage} </p>

)}
</div>
</div>
  )
}
