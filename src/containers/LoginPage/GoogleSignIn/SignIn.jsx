import React from "react";
import { auth, provider } from "./MyConfig"
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react'
import google_icon from "../images/google-icon.png";
import "../components/LoginCard/LoginCard.css";
import LogOut from "./LogOut/LogOut";

const SignIn = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("Email", data.user.email)
            window.location.replace("https://zhamal2k04.github.io/Project--Designo#/home")
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("Email"))
    })

    return (
        <div>
            {value ? <LogOut /> :
                <button onClick={handleClick} id='google-btn'>
                    <img src={google_icon} alt="icon" />
                    <span>Sign In with Google</span>
                </button>
            }
        </div>
    )
}

export default SignIn;