
import { useState,useEffect } from 'react';
import language from './photos/eng.png'
import fb from './photos/fb.png'
import spain from './photos/spain.jpg'
import france from './photos/france.jpg'

function Register() {
    const [signInVisible, setSignInVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);
    const [showLanguage , setShowLanguage] = useState(true)
    const [hideLanguage , sethideLanguage] = useState(true)

    const toggleShowlanguage = () => {
      setShowLanguage(!showLanguage);
    }

  

    const toggleSignIn = () => {
      setSignInVisible(!signInVisible);
    };
  
    const toggleSignUp = () => {
      setSignUpVisible(!signUpVisible);
  
    };
  
    return (
      <>
      <div className='register'>
      {showLanguage && (<img src={language}  className='language' onClick={toggleShowlanguage}></img>) }
      
      {!showLanguage && ( <div className='yep'>
        <div className='language-list' onClick={toggleShowlanguage}>
          <div className='enebi' >
          <img src={language} className='language' ></img>
          <li className='li-s'>English</li>
          </div>
          <div className='enebi'>
          <img src={france} className='language'></img>
          <li className='li-s'>France</li>
          </div>
          
          <div className='enebi'>
          <img src={spain} className='language'></img>
          <li className='li-s'>Spain</li>
          </div>
          
        </div>

      </div>)}

      
      
        {!signInVisible && (
          <button className='register-button-sign-in' onClick={toggleSignIn}>
            Sign In
          </button>
        )}
    
        {!signUpVisible && (
          <button className='register-button-sign-up' onClick={toggleSignUp}>
            Sign Up
          </button>
        )}
  
     
        {signInVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2>Sign In</h2>
              <form className='form2'>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
              </form>
              <button onClick={toggleSignIn}>Close</button>
            </div>
          
            <div class="media-options">
                    <a href="https://www.facebook.com/" class="facebook" target='blank'>
                      <img src={fb} className='fb-logo'></img>
                        <span>Login with Facebook</span>
                    </a>
              
               </div>
          </div>
        )}
  
  
        {signUpVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2>Sign Up</h2>
              <form className='form1'>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
              </form>
              <button onClick={toggleSignUp}>Close</button>
            </div>
            <div class="media-options">
                    <a href="https://www.facebook.com/" class="facebook" target='blank'>
                      <img src={fb} className='fb-logo'></img>
                        <span>Sign with Facebook</span>
                    </a>
              
               </div>

          </div>
        )}
      </div>
      </>
      
    );
  }

  export default Register