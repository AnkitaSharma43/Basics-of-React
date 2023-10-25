import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({ Component }) {
    const navigate = useNavigate()
    useEffect(() => {
        const authAccess = localStorage.getItem("name")
        if (!authAccess) {
            navigate("/login")
        }
    },[])
    return (
        <>
            <Component />
        </>
    )
}

export default Protected













