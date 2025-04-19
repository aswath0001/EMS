import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {

    const [employees ,setEmployees] = useState([])
    const Navigator = useNavigate();

    useEffect(()=>{
        listEmployees().then((Response)=>{
            setEmployees(Response.data);
        }).catch(error=>{
            console.error(error);
        })
    },[])

function addNewEmployee (){
    Navigator('/add-employee')
}

  return (
    <div className='container'>
        <h2>List of employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>
                       Id 
                    </th>
                    <th>
                        firstname
                    </th>
                    <th>
                        lastname
                    </th>
                    <th>
                        email
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )   
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee