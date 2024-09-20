 export const EventHandLing =()=>{
   

    const event =(data)=>{
        alert(data)
    }
return (
    <>
    <button onClick={event}>Click Me</button>
    <button onClick={()=>event()}>Click Me</button>
    <button onClick={()=>alert("hii this is click")}>Click it</button>
    <button onClick={() =>event("hii")}>Click it</button>
    </>
);

}