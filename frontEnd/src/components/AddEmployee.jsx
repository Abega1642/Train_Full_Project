import { useState } from "react";
import { Inputs } from "./Inputs";


function AddEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const addTheEmployee = () => {
        let employee = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        console.log(employee);
    }

  return (
    <div className='container'>
        <div className='row'>
            <aside className='card col-md-6 offset-md-3 mt-5'>
                <h3 className='text-center mt-3'>
                    Add an new employee
                </h3>
                <div className='card-body'>
                    <Inputs 
                        field={firstName} 
                        setField={setFirstName} 
                        type={"text"} 
                        label={"First name :"}
                        placeholder={"Employee first name here ..."}
                    />
                    <Inputs 
                        field={lastName} 
                        setField={setLastName} 
                        type={"text"} 
                        label={"Last name :"}
                        placeholder={"Employee last name here ..."}
                    />
                    <Inputs 
                        field={email} 
                        setField={setEmail} 
                        type={"email"} 
                        label={"Email :"}
                        placeholder={"Employee email name here ..."}
                    />
                </div>
                <button 
                    className="btn btn-success m-3"
                    onClick={addTheEmployee}
                >
                    Add
                </button>
            </aside>

        </div>
    </div>
  )
}

export default AddEmployee