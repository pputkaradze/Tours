import Logo from './Logo'
import Info from './Info'
import Register from './Register'


function Header({handleShowContact,handleShowHome}){


    return(
      <div className='header'>
           <div className="header-upper-part">
              <Logo></Logo>
              <Info handleShowContact={handleShowContact} handleShowHome={handleShowHome}></Info>
              <Register></Register>
          </div>
      </div>
    )
}

export default Header