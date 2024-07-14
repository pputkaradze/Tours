function Info({handleShowContact,handleShowHome}) {
    return(
      <div className='info'>
        <span className='info-parts' onClick={handleShowHome}>Home</span>
        <span className='info-parts' onClick={handleShowContact}>Contact</span>
      </div>
    )
  
  }
  export default  Info