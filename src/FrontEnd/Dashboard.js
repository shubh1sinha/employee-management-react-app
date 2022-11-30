import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function Dashboard() {
    const {id} = useParams()
    if(id !== 'admin'){
  return (
    <div><div>
    <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
              <h2 className='text-center m-4'>Employee Dashboard</h2>
              <div className='card'>
                  <div className='card-header'>
                      <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>
                          
                          <Link className='btn btn-outline-dark' to={`/employee/update/${id}`} >Update Information</Link> &nbsp;
                          <Link className='btn btn-outline-dark' to={`/employee/info/${id}`} >View</Link> &nbsp;
                          
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
  </div>
  </div></div>
  )
    }
    else if(id === 'admin' || id.contains("admin")  || id === 'Hr-admin'){
      return (
      <div><div>
      <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Employee Dashboard</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                            
                            <Link className='btn btn-outline-dark' to={`/employee/list/${id}`} >Employee List</Link> &nbsp;
                            <Link className='btn btn-outline-dark' to={`/admin/register/${id}`} >Register Admin</Link> &nbsp;
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    </div>
    </div></div>
    )
    }
}
