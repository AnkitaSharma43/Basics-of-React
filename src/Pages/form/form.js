import React, { useEffect, useState } from 'react';
import "./form.css";
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const navigate = useNavigate()
    const authAccess = localStorage.getItem("userName")
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [data, setData] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({
        //     name,email
        // })
        // localStorage.setItem("userDetail",
        //     JSON.stringify({ name,email})
        // )
        localStorage.setItem('userName', name)
        localStorage.setItem('userEmail', email)
        navigate("/")
    }
    const handleRemove = () => {
        localStorage.removeItem('userName')
    }
    const handleClear = () => {
        localStorage.clear()
    }
    const handleGet = () => {
        let container = localStorage.getItem("userName")
        setData(container)
    }

  
    useEffect(()=>{
      if(authAccess){
        navigate("/")
      }
    },[authAccess])

    return (
        <>
            <div className=" wrap">
                <form>
                    <h3> Form</h3>
                    <div className="form-feild">
                        <label>
                            Your Name
                        </label>
                        {/* <input  onChange = {(event) => console.log(event.target.value)} type="text" placeholder="Your Name" /> */}
                        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-feild">
                        <label>
                            Your Email
                        </label>
                        <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Your Email" />
                    </div>
                    <div className="flex flex-end gap-12">
                        <button onClick={handleRemove} className="btn btn-warning btn-lg btn3d">
                            Remove
                        </button>
                        <button onClick={handleClear} className="btn btn-danger btn-lg btn3d">
                            Clear
                        </button>
                        <button onClick={handleSubmit} className="btn btn-info btn-lg btn3d">
                            Submit
                        </button>
                </div>
                </form>
                <button onClick={() => handleGet()} className="btn btn-success btn-lg btn3d">
                    Get data
                </button>
                <p>{data}</p>
            </div>

        </>
    )
}

export default Form