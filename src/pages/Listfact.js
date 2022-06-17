import { useState, useEffect } from 'react';

function Listfact() {
	let [lstd,setlstd]=useState([]);
async function getstd(){
	var resp=await fetch("http://localhost:5000/listfac");
	var data=await resp.json();
	setlstd(data);
}


	useEffect(()=>{
getstd();
	},[]);
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

				<div class="">
					<div class="section group">
						<div className="row">
							<div className="col-md-12">
								<table className="table table-bordered">
									<thead className="thead-dark">
										<tr>
											
											<th scope="col">Name</th>
											<th scope="col">Email</th>
											<th scope="col">Contact</th>
											<th scope="col">Gender</th>
											<th scope="col">Department</th>
										</tr>
									</thead>
									<tbody>
										{lstd.map((s)=>
										<tr key={s._id}>
											<td>{s.name}</td>
											<td>{s.email}</td>
											<td>{s.contact}</td>
											<td>{s.gender}</td>
											<td>{s.department}</td>
											
										</tr>
                                       )}
										
									</tbody>
								</table>
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

export default Listfact;