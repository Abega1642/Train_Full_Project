export default function EmployeeList() {
    const list = [
        {
            "id": 1,
            "firstName": "employee",
            "lastName": "employeeL",
            "email": "email@gmail.com"
        },
        {
            "id": 2,
            "firstName": "employee2",
            "lastName": "employeeL2",
            "email": "email2@gmail.com"
        }
    ]

  return (
    <div className="container">
        <h3 className="text-center">
            List of employees
        </h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Empoloyee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(employee =>
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
