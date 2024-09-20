import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { EventHandLing } from './Component/EventHandling.jsx'
//  import { EventPropagation } from './Component/EventPropagation.jsx'
import {Incriment} from './Component/incriementState'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <section className='container'>
        <h1 className='natflix-heading'>best Netflix Series</h1>
   <App />
   </section>
   <EventHandLing/> */}
   {/* <EventPropagation/> */}
   <Incriment/>  </StrictMode>,
)
