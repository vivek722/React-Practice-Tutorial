 const natflixCard =({props} )=>{
    
    const {id,img_url,name,rating,description,genre,cast,watch_url} =  props.currentelement;
    return(
        <li key={props.currentelement.id}>
           <img src={props.currentelement.img_url} width="40%" height="40%"></img>
           <h1>{props.currentelement.name}</h1>
           <h2>{props.currentelement.rating}</h2>
           <h3>{props.currentelement.description}</h3>
           <h1>{props.currentelement.genre}</h1>
           <h2>{props.currentelement.cast}</h2>
           <a href={props.currentelement.watch_url}>{props.currentelement.watch_url}</a>
         </li>);
}
export default natflixCard