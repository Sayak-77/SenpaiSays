import React, { useState } from 'react'
import '../style/loginstyles.css';

const Login = () => {
	
const [user, setUser] = useState({
	name: "",email: "", password: ""
});
let name, value;
const handleInputs = (e) =>{
	name=e.target.name;
	value=e.target.value;

	setUser({... user, [name]:value});
}
 const handleSubmit = async (e) =>{
	e.preventDefault();
	const response = await fetch('http://localhost:8080/register',{
		method: 'POST',
		body:JSON.stringify(user),
		headers:{
			'Content-Type':'application/json'
		}
	})
	const data = await response.json();
	console.log(data);
 }

 const getusers = async () =>{
	const response = await fetch('http://localhost:8080/register',{
		method: 'GET',
	})
	const data = await response.json();
	console.log(data);
 }

useState(()=>{
	getusers();
},[])

  return (
    <div className="big">
    <div className="container" id="container">
	<div className="form-container sign-up-container">
		<form className="fo1" action="#" onSubmit={handleSubmit}>
			<h1 className="h1">Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="sp">or use your email for registration</span>
			<input name="name" id="name" autoComplete="off" pattern="[^0-9]*" title="Name cannot contain numerics" type="text" placeholder="Name" value={user.name} onChange={handleInputs} required/>
			<input name="email" id="email" autoComplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Lowercase Required with 2 letters after ." type="email" placeholder="Email" value={user.email} onChange={handleInputs} required/>
			<input  name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Required a length of 8 and atleast One Lowercase, One Uppercase, One number." id="password" autoComplete="off"type="password" placeholder="Password" value={user.password} onChange={handleInputs} required/>
			<button className="page">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className="fo1" action="#">
			<h1 className="h1">Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="sp">or use your account</span>
			<input id="in1" type="email" placeholder="Email" />
			<input id="in1" type="password" placeholder="Password" />
			<a id="done" href="#"><u>Forgot your password</u> ?</a>
			<button className="page" style={{marginTop:16}}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="h1">Welcome Back!</h1>
				<p className="p1">To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={set}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="h1">Hello, Friend!</h1>
				<p className='p1'>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={set}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>
  )
}

function set()
{
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
}
export default Login
