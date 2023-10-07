import React, { useState, useEffect } from 'react';
import Form from './Form';

export default function Body() {
    const [whatIDO, setWhatIDO] = useState({
        do : "",
        time: new Date().getTime(),
        completed: false,
    })

    const getValue = (input) => {
        setWhatIDO( prev => {
            return {...prev, do: input}
        })
    }

    useEffect(()=> {
        console.log(whatIDO);
    },[whatIDO])

    return (
        <>
            <Form 
                handleClick={getValue}
            />
            <p>{whatIDO.do}</p>
        </>
    )
}