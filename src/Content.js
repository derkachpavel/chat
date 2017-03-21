import React, { Component } from 'react';

import './Content.css';

class Content extends Component {
  render(Content){
  	return (
    <div className="chat">
        <ul className="chat-all">
          <li className="chat-main active"><a href="#">Main chat</a></li>
          <li className="chat-with"><a href="#">Chat with Alison (2)</a><a className="close" href="#">X</a></li>
          <li className="chat-with1"><a href="#">Chat with John (2)</a><a className="close" href="#">X</a></li>

        </ul>
      
        <div id="online_main" className="chat-online-wr" >
          <div className="chat-online-all">
            <div className="chat-online" id="chat_online_div">
                
                <ul id="chat_online_ul">               
                </ul>
            </div>
          </div>
        </div>
    </div>  
    );
  }
}

export default Content;