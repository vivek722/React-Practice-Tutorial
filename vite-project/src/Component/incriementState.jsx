import { useState } from "react";


export const Incriment =()=>{
    const[count,setCount] = useState(0);

    // const setCount =() =>{
    //     console.log(newCount);
    //     count =newCount+1;
    //     console.log(newCount);
    // }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count +1)}>Increment</button>
        </>
    )

}