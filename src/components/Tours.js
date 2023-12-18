import Card from './Card'

function Tours({tours,removeCard}){
  return(
    <div className="container">
        <div className="title">
            <h2>Tour Places</h2>
        </div>
        <div className="cards">
            {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeCard={removeCard}></Card>
                    {/* along with map always pass a key */}
                })
            }
        </div>
    </div>
  )
}
 export default Tours;