import {useState} from 'react';

// for dealing with single card
function Card({id,image,info,price,name,removeCard})
//  accept the parameters as array
{
    
    const[readmore, setReadmore]=useState(false);

    const description= readmore?info:`${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore); 
        // opposing or switching the previous state
    }

    return(
        <div className="Card">
            <img src={image} className="image"></img> 
            
            <div className="tour-info">
              <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
              </div>
              <div className="description">
               {description}  
               {/* description is declared above */ }
               <span className="read-more" onClick={readmoreHandler}>
                {readmore? `Show Less`: `Read More`}
               </span>
              </div>
            </div>
            
            <button className="btn-red" onClick={()=> removeCard(id)}>
                {/* on the event of click the card having id 'say 1' will be removed */}
                Not Interested
            </button>
            
        </div>
    )
}

export default Card;