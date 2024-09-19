 const natflixCard =(props )=>{
    
    const {id,img_url,name,rating,description,genre,cast,watch_url} =  props.currentelement;
    const ratingClass = props.currentelement.rating >= 8.5 ?"super_hit" :"avrage"
    return(
        <div key={props.currentelement.id} className="card">
           <div><img src={props.currentelement.img_url} width="100%" height="70%"></img></div>
           <div className="card-content">
           <h2>Name :- {props.currentelement.name}</h2>
           <h3>Ratting :- <span className={`rate ${ratingClass}`} >{props.currentelement.rating}</span></h3>
           <h4>Description :-{props. currentelement.description}</h4>
           <h3>Genre :- {props.currentelement.genre}</h3>
           <h4>Cast :- {props.currentelement.cast}</h4>
           <button className={`Watch_Now ${ratingClass}`}><a href={props.currentelement.watch_url}>Watch now</a></button>
           </div>
         </div>
         );
         
}
export default natflixCard