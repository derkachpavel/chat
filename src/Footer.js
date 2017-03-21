import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render(){
  	return (
      <div className='Footer'> 
		<div className="input-message">
			<div className="text-messege">
				<form name="chat_form">
					<textarea id="text1" name="text" value=""></textarea>
				</form>
			</div>
					
  			<ul className="format-message" id="format_red">
				<li className="format-fat"><input id="select_b" className="format-fat" type="button" value="B" /></li>
				<li className="format-italics"><input id="select_i" className="format-italics" type="button" value="I" /></li>
				<li className="format-underline"><input id="select_u" className="format-underline" type="button" value="U" /></li>
				<li className="format-link"><input id="select_link" className="format-link" type="button" value="Link" /></li>
			</ul>
			<form className="send-message">
				<input id="input_chat" type="button" name="send-message" value="Send message" />	
			</form>		
		</div>

		<div className="entered-message">
			<div className="quantity-symbols"><p><span id="symbol" className="quantity">0</span> characters entered</p></div>
			<div className="quantity-letter"><p><span id="letter" className="quantity">0</span> letters entered</p></div>
			<div className="quantity-hidden"><p><span id="space" className="quantity">0</span> whitespace characters entered</p></div>
			<div className="quantity-punctuation"><p><span id="punctuation" className="quantity">0</span> punctuation marks entered</p></div>
		</div>
      </div>
    );
  }
}

export default Footer;