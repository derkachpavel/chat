import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render(){
  	return (
      <div className='header'> 
        
        <div className='time'>
          <p className='online-time'>You are online for: <span id='online_time'>1h 30m</span></p>
          <p className='local-time'>Your local time is: <span id='local_time_now'>10:45</span></p>
        </div>
        <div className='pers-private'>
          <p><a id='open_reg' className='pers-info' href='#modal_1'>Edit personal info</a></p>
          <p className='hello-user'>Hello:<span id='enter_user'></span></p>
        </div>
        <div className='logo'>
          
        </div>
      </div>
    );
  }
}

export default Header;