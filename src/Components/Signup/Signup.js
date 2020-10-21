import React from 'react';
import Tilt from 'react-tilt';
import './Signup.css';
const Signup = ()=> {
	return(
			<div className = "Signup">
			<Tilt className="Tilt" options={{ max : 7 }}  >
				<div className="container">
						  <form action="/action_page.php">
						    <div className="row">
						      <h1 style = {{ textAlign:"center" }}>MOKO™</h1>
						      <div className="vl">
						        <span className="vl-innertext">or</span>
						      </div>

						      <div className="col">
						        <a href="#" className="fb btn">
						          <i className="fa fa-facebook fa-fw"></i> Login with Facebook
						         </a>
						        <a href="#" className="twitter btn">
						          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
						        </a>
						        <a href="#" className="google btn"><i className="fa fa-google fa-fw">
						          </i> Login with Google+
						        </a>
						      </div>

						      <div className="col">
						        <div className="hide-md-lg">
						          <p>Or sign in manually:</p>
						        </div>

						        <input type="text" name="username" placeholder="Username" required/>
						        <input type="password" name="password" placeholder="Password" required/>
						        <input type="submit" value="Login"/>
						      </div>
						      
						    </div>
						  </form>
						</div>
								<div className="bottom-container">
									  <div className="row">
									    <div className="Bottomcol">
									      <a href="#" className="btn">About</a>
									    </div>
									    <div className="Bottomcol">
									      <a href="#" className="btn">Contact</a>
									    </div>
									    <div className="Bottomcol">
									      <a href="#" className="btn">Teams</a>
									    </div>
									  </div>
								</div>
						</Tilt>
							<footer>© 2020 MOKO™. All Rights Reserved.</footer>
					</div>
		);
}

export default Signup;