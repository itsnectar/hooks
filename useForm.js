import React, { useState } from 'react'

export const useForm = (initialState={}) => {
    const [formValues, setformValues] = useState(initialState);

    const reset = () => {
        setformValues(initialState);
    }

    const cambioEnElInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    } 
    return [formValues,cambioEnElInput,reset]    
}
