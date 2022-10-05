import axios from 'axios';
import React from 'react';
import { useState } from "react";


export const UseLogin = () => {
    const [formState, setFormState] = useState({ mail: "", pass: "" });
    let data={
        email: formState.mail,
        password: formState.pass
    }
    const settings = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)

    }
    const handlerLogin = (e) => {
        e.preventDefault();
        fetch('https://api-nodejs-todolist.herokuapp.com/user/login', settings)
            .then(response => response.json())
            .then(data => {
                
                localStorage.setItem("datos",JSON.stringify(data))
                console.log(data)
            
            })
            .catch(err => console.log(err))

            
    }

    const hanlderInput = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        }
        )

    }



    return { handlerLogin, hanlderInput, formState };

}
