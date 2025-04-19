import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {

    const [employees ,setEmployees] = useState([])
    const Navigator = useNavigate();

    useEffect(()=>{
       getAllEmployees();
    },[])

function getAllEmployees(){
    listEmployees().then((Response)=>{
        setEmployees(Response.data);
    }).catch(error=>{
        console.error(error);
    })
}  
    
function addNewEmployee (){
    Navigator('/add-employee')
}
function updateEmployee(id){
    Navigator(`/update-employee/${id}`)
}
function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((Response)=>{
        getAllEmployees();
    }).catch(error =>{
        console.error(error);
    })
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
                    <th>
                        Action
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
                            <td>
                                < button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>
                                    Update
                                </button>
                                < button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)}
                                style={{marginLeft:'10px'}}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )   
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee