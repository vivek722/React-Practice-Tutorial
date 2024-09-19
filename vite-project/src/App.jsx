//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import data  from './APi/Jsondata.json'
import NatflixCard from './Component/natflixCard'

function App() {
  return (
    <>
    <ul className='grid grid-three-cols'>
      {data.map((currentelement)=>{
        return(
           <NatflixCard  key={currentelement.id} currentelement={currentelement}/>
        )
      })}
   
    </ul>
    </>
  )
}

export default App
