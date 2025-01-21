import React from 'react';
import Myimg from '../images/welcome.png'; 
import '../CSS/new.css';

function LoginImage() {
  return (
    <div className="login-image">
      <img src={Myimg} alt="Login" className='newimg' />
    </div>
  );
}

export default LoginImage;