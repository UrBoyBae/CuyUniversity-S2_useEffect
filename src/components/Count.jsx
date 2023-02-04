import React from "react";
import { useState, useEffect } from "react";

const Count = () => {
    const [counter, setCounter] = useState(0);
    const addCounter = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        if(counter < 1){
            document.title = 'Belum Ada Counter'
        } else {
            document.title = 'Counter ' + counter
        }
    },[counter])

    useEffect(() => {
        alert('Selamat Datang')
    },[])

    return (
        <div className="card">
            <h3> Nilai Dari Counter </h3>
            <h3 className="point">{counter}</h3>
        <button className="button" onClick={addCounter}>Add Counter</button>
        </div>
    );
};

export default Count;
