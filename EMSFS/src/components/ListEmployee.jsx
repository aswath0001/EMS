import React from 'react'

const ListEmployee = () => {

const data = [
    {
    "id":1,
    "firstName":"Aswath",
     "lastName":"R S",
     "email":"aswathrs78@gmail.com"
    },{
        "id":2,
    "firstName":"Aswath",
     "lastName":"R S",
     "email":"aswathrs78@gmail.com"
    },{
        "id":3,
    "firstName":"Aswath",
     "lastName":"R S",
     "email":"aswathrs78@gmail.com"
    }
]

  return (
    <div className='container'>
        <h2>List of employees</h2>
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
                    data.map(employee =>
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