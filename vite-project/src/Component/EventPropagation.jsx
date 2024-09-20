 export const EventPropagation =()=>{
    const handlegrannd =()=>{
        console.log("grand Click");
    }
    const handleparent =()=>{
        console.log("parent Click");
    }
    const handleChilde =(event)=>{
            console.log(event);
            event.stopPropagation()
            console.log("Child Click");
    }

    return(
        <div className="Div1" onClick={handlegrannd} >
            <div className="Div2" onClick={handleparent}>
                    <button onClick={handleChilde}>Div3</button>
            </div>
        </div>
    )
}