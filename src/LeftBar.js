import React, { Component } from 'react';

import './LeftBar.css';

class LeftBar extends Component {
  render(){
  	return (
      <div className='LeftBar'> 
      	<input id="your_name" type="text" name="your_name" className="input_name" placeholder="enter your name" />
		<input id="your_name_enter" type="button" className="input_name_enter" value="ok" />
		<div className="user-chat">
			<div className="online-user">
				<p className="online-user">Online:<span id="online_users">5</span></p>
			</div>
			<div className="list-uder-wr">
				<div className="list-uder">
					<ul id="using_pure_js">
						fff <br/>
						fff <br/>
						fffff <br/>
						fffffe <br/>
						eeeeeee <br/>
						eeeeee <br/>
						eeeeeee <br/>
						eeeeeee <br/>
						eeeeeee <br/>
						eeeeeee <br/>
						eeeeeeeggg <br/>
						gggg <br/>
						gggg <br/>
						eeeeee <br/>
						eeeeeee <br/>
						eeeeeee <br/>
						eeeeeee <br/>
						eeeeeee <br/>
					</ul>
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default LeftBar;