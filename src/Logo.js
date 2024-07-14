import logo from './photos/2be1edd8c763fd2871c9f26b31cdcf11.jpg'

function Logo(){
    return(
      <div className="logo-part">
        <img src={logo} alt='logo' className='logo1'></img>
          <p className='company-name'>LUKExpress</p>
      </div>
    
    )
  }

  export default Logo;