import React from "react"
import { useState } from "react"

function Count (){

    const [Count, setCount] = useState(0)

    const Inc = ()=>{
        setCount(Count + 1)
    }
    const Dec = () =>{
        setCount (Count -1)
    }
    const Res = () =>{
        setCount (0)
    }
    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={()=>Inc()}>Increment</button>
            <button onClick={()=>Dec()}>Decrement</button>
            <button onClick={()=>Res()}>Reset</button>

        </div>
    )
};
export default Count