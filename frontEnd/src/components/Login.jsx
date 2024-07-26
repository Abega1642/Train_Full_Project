import { Inputs } from "./Inputs";
import { useState } from "react";

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='container'>
        <div className='row'>
            <aside className='card col-md-6 offset-md-3 mt-5'>
                <h3 className='text-center mt-3'>
                    Login
                </h3>
                <div className='card-body'>
                    <Inputs 
                        field={userName} 
                        setField={setUserName} 
                        type={"text"} 
                        label={"Username :"}
                        placeholder={"Your username here ..."}
                    />
                    <Inputs 
                        field={password} 
                        setField={setPassword} 
                        type={"password"} 
                        label={"Password :"}
                        placeholder={"Your password here ..."}
                    />
                </div>
                <button className="btn btn-success m-3">
                    Submit
                </button>
            </aside>

        </div>
    </div>
  )
}

export default Login