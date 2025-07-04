import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'

const AddEmployee = () => {

    const [firstName ,setFirstName] = useState('')
    const [lastName ,setlastName] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams();
    const [errors,setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    })
   
    const navigator = useNavigate();

   useEffect(()=>{
    if(id){
        getEmployee(id).then((Response) =>{
            setFirstName(Response.data.firstName);
            setlastName(Response.data.lastName);
            setEmail(Response.data.email);
        }).catch(error => {
            console.error(error);
        })
    }
   },[id])

   function saveOrUpdateEmployee (e){
    e.preventDefault();

    if(vaildationForm()) {
        const employee ={firstName, lastName ,email}
        console.log(employee);
        if(id){
            updateEmployee(id,employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            }).catch(error=> {
                console.error(error);
            })
        }else{
            createEmployee(employee).then ((Response) =>{
                console.log(Response.data)
                navigator('/employees')
            }).catch(error => {
                console.error(error);
            })
           }    
        }
    
        
    }
    
   function vaildationForm(){
    let valid =true
    const errorsCopy = {...errors}
    
    if(firstName.trim()){
        errorsCopy.firstName = '';
    }else{
        errorsCopy.firstName = 'First name is required';
        valid=false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    }else{
        errorsCopy.lastName = 'Last name is required';
        valid=false;
    }

    if(email.trim()){
        errorsCopy.email = '';
    }else{
        errorsCopy.email = 'Email is required';
        valid=false;
    }

    setErrors(errorsCopy);
    return valid;
   }

function pageTitle (){
    if(id){
        return <h2 className='text-center'>Update Employee</h2>
    }else{
        return <h2 className='text-center'>Add Employee</h2>
    }
}

  return (
    <div>
        <div className='container'>
            <br/> <br/>
         <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
             {
                pageTitle()
             }
             <div className='card-body'>
               <form>

                <div className='form-group mb-2'>
                 <label className='form-label'>First Name</label>
                 <input
                 type='text'
                 placeholder='Enter First Name'
                 name='firstName'
                 value={firstName}
                 className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                 onChange={(e) =>  setFirstName(e.target.value)}>
                  
                 </input>
                 {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>
                <div className='form-group mb-2'>
                 <label className='form-label'>Last Name</label>
                 <input
                 type='text'
                 placeholder='Enter Last Name'
                 name='firstName'
                 value={lastName}
                 className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                 onChange={(e)=>setlastName(e.target.value)}>  
                 </input>
                 {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>
                
                <div className='form-group mb-2'>
                 <label className='form-label'>Email</label>
                 <input
                 type='text'
                 placeholder='Enter Email'
                 name='email'
                 value={email}
                 className={`form-control ${errors.email ? 'is-invalid':''}`}
                 onChange={(e) =>setEmail(e.target.value)}>
                 </input>
                 {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
               <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
               </form>
             </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default AddEmployee