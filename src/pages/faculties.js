import {useState} from 'react';
function Faculties() {
let[name,setName]=useState("");
let[email,setEmail]=useState("");
let[contact,setContact]=useState("");
let[gender,setGender]=useState("");
let[department,setDepartment]=useState("");
	return (

		<>

			<div class="header">
				<div class="wrap">

					<div class="logo">
						<a href="index.html"><img src="images/logo.png" title="logo" /></a>
					</div>

					<div class="top-search-bar">
						<div class="header-top-nav">
							<ul>
								<li><a href="#"><img src="images/marker1.png" title="livehelp" />Live Help</a></li>
								<li><a href="#"><img src="images/marker1.png" title="Blog" />Our Blog</a></li>
								<li><a href="#"><img src="images/marker1.png" title="customer report" />customer Report</a></li>
							</ul>
						</div>
					</div>
					<div class="clear"> </div>
				</div>
			</div>
			<div class="clear"> </div>
			<div class="header-nav">
				<div class="wrap">
					<div class="left-nav">
						<ul>
							<li class="active"><a href="/">Home</a></li>
							<li><a href="/about">About us</a></li>
							<li><a href="clients.html">Clients</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
					<div class="right-social-icons">
						<ul>
							<li><a class="icon1" href="#"> </a></li>
							<li><a class="icon2" href="#"> </a></li>
							<li><a class="icon3" href="#"> </a></li>
							<li><a class="icon4" href="#"> </a></li>
						</ul>
					</div>
					<div class="clear"> </div>
				</div>

			</div>

			<div class="wrap">
				<div class="image-slider">

					<ul class="rslides" id="slider1">
						<li><img src="images/slide1.jpg" alt="" /></li>
						<li><img src="images/slide2.jpg" alt="" /></li>
						<li><img src="images/slide1.jpg" alt="" /></li>
					</ul>

				</div>

				<div class="content">
					<div class="section group">
						<div className="row">
							<div className="col-md-6 reg">
								<p>Name:</p>
								<input onChange={(ev)=>{
								setName(ev.target.value);
							}} type="text" placeholder="Enter your full name" className="form-control" />
								<p>Email:</p>
								<input onChange={(ev)=>{
								setEmail(ev.target.value);
							}} type="text" placeholder="Enter your email id" className="form-control" />
								<p>Contact No:</p>
								<input onChange={(ev)=>{
								setContact(ev.target.value);
							}} type="number" placeholder="Enter a valid contact no" className="form-control" />
								<p class="gender">Select Your Gender</p>
								<select onChange={(ev)=>{
								setGender(ev.target.value);
							}} name="gender" className="form-control">
									<option value="none" selected>-Gender-</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">other</option>
								</select>
								<p>Select Your Department</p>
							<select onChange={(ev)=>{
								setDepartment(ev.target.value);
							}} name="department" className="form-control"	>
								<option value="none" selected>-Department-</option>
								<option value="">Computer Science</option>
								<option value="">Mechanical</option>
								<option value="">Electrical</option>
								<option value="">Civil</option>
								<option value="">Automobile</option>
								<option value="">Hotel Management</option>
								<option value="">Others</option>
							</select>

							<button onClick={async ()=>{
								var fd=new FormData();
								fd.append("name",name);
								fd.append("email",email);
								fd.append("contact",contact);
								fd.append("gender",gender);
								fd.append("department",department);
								

							var resp=await fetch("http://localhost:5000/fact-reg",{
								method:'POST',
								body:fd
							});
							var data=await resp.json();
							console.log(data);
							}} type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
							</div>
						</div>
					</div>
				</div>

				<div class="clear"> </div>
			</div>
			<div class="footer">
				<div class="wrap">
					<div class="footer-left">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About us</a></li>
							<li><a href="clients.html">Clients</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
					<div class="footer-right">
						<p>&copy; 2022  All Rights Reserved | Design by  WebTeam.</p>
					</div>
					<div class="clear"> </div>
				</div>
				<div class="clear"> </div>

			</div>
		</>
	);
}

export default Faculties;