import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log("password", password)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ "name": name, "email": email, "password": password })
        // store form data in local storage
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        navigate("/")
    }

    const authAccess = localStorage.getItem("name")
    useEffect(() => {
        if (authAccess) {
            navigate("/")
        }
    }, [authAccess])
    return (
        <>
            <div className="wrap login-form">
                <form>
                    <div className="input-feild">
                        <label>
                            Your Name
                        </label>
                        <input onChange={(e) => setName(e.target.value)} type="text" />
                    </div>
                    <div className="input-feild">
                        <label>
                            Your Email
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" />
                    </div>
                    <div className="input-feild">
                        <label>
                            Your Password
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" />
                    </div>
                    <div className="align-end">
                        <h6>
                            Forgot Password
                        </h6>
                    </div>
                    <div className="align-center">
                        <button onClick={handleSubmit} className="btn btn3d btn-success">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login