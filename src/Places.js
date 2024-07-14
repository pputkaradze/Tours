function Places({img,children, onClick}){
    return(
        <span className='Icon-div' onClick={onClick}>
          <img src={img} alt="yee" className='icon-images'></img>
          <button className='icon-name'>{children}</button>
        </span>
    )
  }

  export default Places