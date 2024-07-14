import LowerPart from "./LowerPart";
import { useState } from "react";
import Places from "./Places";
import skate from './photos/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg'
import beach from './photos/beach.jpg'
import boats from './photos/boats.jpg'
import desert from './photos/desert.jpg'
import trending from './photos/trending.jpg'
import tropical from './photos/tropical.jpg'
import all from './photos/all.webp'
import lake from './photos/lake.jpg'
import topcities from './photos/topcities.jpg'
import Inputs from './Inputs';
import touristTours from "./Countries";
function Category(){
  const [selectedRegion, setSelectedRegion] = useState("")
  const [unchangedTours, setUnchangedTours] = useState(touristTours)
  const [tours, setTours] = useState(touristTours);
    const [selectedCategory, setSelectedCategory] = useState('All');
    console.log(selectedRegion)
    console.log(tours)

  // Filtering By Region
    const filterByRegion = (reg) => {
      if(reg === "") {
        setTours(unchangedTours)
      } 
      else {
       let filteredArr =  unchangedTours.filter((tour) => tour.region === reg)
       setTours(filteredArr)
      }
    }

    // Filtering by Category
    const filterByCategory = (cat) => {
     if(cat !== "All") {
   
          let filteredTours = unchangedTours.map((tour) => {

        const filteredPlaces = tour.places.filter((place) => place.category === cat);
    

        return { ...tour, places: filteredPlaces };
    }).filter((tour) => tour.places.length > 0); 
    setTours(filteredTours)  
     }
    }

// What happens when we change category
   function handleCategoryChange  (category)  {
        setSelectedCategory(category);
        filterByCategory(category)
        
   };


//  What happens when we change region
   const selectedRegionHandler = (event) => {
    setSelectedRegion(event.target.value)
    filterByRegion(event.target.value)
  
 }
  
    return(
      
      <>
      <Inputs selectedRegionHandler={selectedRegionHandler} selectedRegion={selectedRegion}></Inputs>
      <div className='icon-category'>
        {/* <Places img={all}  value='' onClick={() => handleCategoryChange("All")}>All Place</Places> */}
        {/* <Places img={trending}  value='Trending' onClick={() => handleCategoryChange('Trending')}>Trending</Places> */}
        <Places img={skate} value='Ski-in' onClick={() => handleCategoryChange('Ski-in')}>Ski-in/out</Places>
        <Places img={desert}  value='Desert' onClick={() => handleCategoryChange('Desert')}>Desert</Places>
        <Places img={lake}  value='Lake' onClick={() => handleCategoryChange('Lake')}>Lake</Places>
        <Places img={beach}  value='Beach' onClick={() => handleCategoryChange('Beach')}>Beach</Places>
        <Places img={tropical}  value='Tropical' onClick={() => handleCategoryChange('Tropical')}>Tropical</Places>
        <Places img={topcities}  value='Top Cities' onClick={() => handleCategoryChange('Top Cities')}>Top cities</Places>
        <Places img={boats} value="Boats" onClick={() => handleCategoryChange('Boats')}>Boats</Places>
      </div>
      <LowerPart tours={tours} selectedCategory={selectedCategory}></LowerPart>
      </>
      
  
    )
  }

  export default Category