import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Signup from './Signup/Signup';
import Navbar from './Navbar/Navbar';

const particlesOptions = {
		            		particles: {
		          				number: {
		          					value:200,
		          					density: {
		          						enable: true,
		          						value_area: 800,
		          					}
		          				}
		          			}
		            	}


function App() {
  return (  <div>
  				<Particles className='particles'
		              params={particlesOptions}
	            />
  				<Signup/>
  			</div>
  	);
}

export default App;
