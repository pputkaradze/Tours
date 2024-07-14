function Inputs({selectedRegionHandler, selectedRegion}){

    



    return(
      <div className='inputs'>
        <label>
            <div>Search Region</div>
          <select id="countries-option" value={selectedRegion} onChange={selectedRegionHandler}>
            <option  selected value=""> All</option>
            <option value="Europe">Euorpe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
            <option value="South America">South America</option>
          </select>
          
        </label>
        
        <div>
          <div>Check in</div>
          <input type='date'></input>
        </div>
  
        <div>
          <div>Check out</div>
          <input type='date'></input>
        </div>
        
        <div>
          <div>Who</div>
          <select id="cars">
          <option value="adults">Adults</option>
          <option value="children">Children</option>
          <option value="infants">Infants</option>
          </select>
          
        </div>
        <button className='search-button'>Search</button>
      </div>
    )
  }
  
  export default Inputs
      