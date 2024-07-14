import { useState, useTransition } from "react";
import touristTours from "./Countries";

function LowerPart({selectedCategory, tours}) {
 
    console.log(tours)
    
        const [showToursDetails , setShowToursDetails] = useState(true)
        
        const[showChoosed, setshowChoose] = useState("");
        
        const [showBooked,setShowBooked] = useState(true)

        function handleShowBooked(){
            setShowBooked((show)=>!show)
        }
        

        function handleShowedCountry(country){
            setshowChoose(country)
            setShowToursDetails(false)
        }

        
        function handleShowTours () {
            setShowToursDetails(!showToursDetails)
        }

        function calculateDaysUntil(showWhenStart) {
            const today = new Date();
            const start = new Date(showWhenStart);
            const difference = start - today;
            const daysUntil = Math.ceil(difference / (1000 * 60 * 60 * 24));
            return daysUntil > 0 ? daysUntil : 0;
        }



    return (
        <>
        
        <div className="grid-container">
            {showToursDetails && tours.map(obj => (
                obj.places.map((place) => {
                    const daysUntil = calculateDaysUntil(place.startDate);
                    return (<div key={place.id} className='main-grid' value={place.region} onClick={()=> handleShowedCountry(place)}>
                        <img src={place.image} alt={place.name} className='images' value={place.name} />
                        <p><strong>{place.name}</strong></p>
                        <p><strong>Start:{place.startDate}, Duration {place.duration}</strong></p>
                        <p>{place.description}</p>
                        <p><strong>${place.price}</strong> per night, Starts in <strong>{daysUntil} Days</strong></p>         
                    </div>)
                })
                    
            )) 
                
            }
                </div>
           <div >
                {!showToursDetails && (
                <div className='choosed'>
                <p>{showChoosed.name}</p>
                <img src={showChoosed.image} alt={showChoosed.name} className='images-choosed' />
                <p>{showChoosed.description}</p>
                <p><strong>${showChoosed.price}</strong> per night, Starts on <strong>{showChoosed.startDate}</strong></p>
                <button onClick={handleShowTours}className="back-to-all">Back to all tours</button>
                {showBooked ? <button className="book-button" onClick={handleShowBooked}>Book now</button> : <button className="book-button" onClick={handleShowBooked}>Cancel Booking</button>}
            </div>
             )}
        </div>
        </>
        
    );
  }

  


  export default LowerPart