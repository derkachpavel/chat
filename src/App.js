import React, {Component} from 'react';
import Header from './Header';
import LeftBar from './LeftBar';
import Content from './Content';
import Footer from './Footer';


import './App.css';

class App extends Component {
	render(){
	return (
	  <div className='wrapper'> 
	   	<Header />
	   	<LeftBar />
	   	<Content />
	   	<Footer />
	  </div>
	);
	}
}
export default App;