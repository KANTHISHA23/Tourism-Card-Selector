import React,{ useState} from "react";
import data from './data'
import Tours from './components/Tours'

const App = () => {

  const [tours, setTours]=useState(data);

  function removeCard (id)
    // removing the current card by id object
  {
        const newTours=tours.filter(tour=> tour.id!==id); 
        // newTours will not contain the card whose id is not equal to the current id
        setTours(newTours);
  }

  if(tours.length==0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className ="btn-white" onClick={()=> setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
   <div className="App">
     <Tours tours={tours} removeCard={removeCard} ></Tours> 
     {/* passing the function to Tours component by props and from Tours it will be passed to Card component
         the data has to imported inside Tours and then card function*/}
   </div>
  );
};

export default App;
