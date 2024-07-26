import { useEffect } from "react";
import { useState } from "react";
import { employeesList } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./AddEmployee";

export default function EmployeeList() {
    const [EmployeeList, setEmployeeList] = useState([]);
    const navigation = useNavigate();
    const AddEmployees = () => navigation("/add_employee")

    useEffect(() => {
        employeesList().then(response => {
            setEmployeeList(response.data)
        }).catch(error => {
            console.error("An error has occured while fetching employees datas", error)
        });
    })

  return (
    <div className="container m-5">
        <h3 className="text-center">
            List of employees
        </h3>
        <button 
            className="btn btn-primary m-3"
            onClick={AddEmployees}
        >
            Add an employee
        </button>
        <table className="table table-striped table-bordered mt-3">
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
                    EmployeeList.map(employee =>
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
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
