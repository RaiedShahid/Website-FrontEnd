import React, { Component } from "react";
import ltnfd from "../images/lost-and-found.jpg";
import logo from "../images/logo6.PNG";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

class Navbar extends Component {
	render() {
		const { user } = this.props;
		//	console.log("navbar user", user);
		return (
			<nav
				className="navbar navbar-expand-md bg-dark   "
				// style={{ backgroundColor: " #8FBC8F" }}
			>
				<div className="container">
					<img src={logo} style={{ width: "5%" }} alt="" />
					<div className="col-md-3">
						<Link className="navbar-brand" to="/">
							<b style={{ color: "white" }}>Lost&Found</b>
						</Link>
					</div>
					<div className="col-md-5" style={{ marginRight: "" }}>
						{/* <div className="active-pink-3 mb-1">	
							<input
								className="form-control"
								type="text"
								placeholder="Search"
								aria-label="Search"
							/>
						</div> */}
					</div>
					<div className="col-md-4 col-sm-6" style={{ marginRight: "0" }}>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavbar"
							//		id="collapsibleNavbar"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<NavLink
										className="nav-link"
										style={{ color: "white" }}
										to="/"
									>
										{/* <i class="fa fa-home"></i> */}
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										style={{ color: "white" }}
										to="/AboutUs"
									>
										{/* <i class="fa fa-home"></i> */}
										AboutUs
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										style={{ color: "white" }}
										to="/Contact"
									>
										{/* <i class="fa fa-home"></i> */}
										Contact
									</NavLink>
								</li>
								<li className="nav-item ">
									<NavLink
										className="nav-link btn btn-success"
										style={{ color: "White" }}
										to="/postAdd"
									>
										PostAd
									</NavLink>
								</li>
								<li className="nav-item">
									<React.Fragment>
										{!user && (
											<NavLink
												className="nav-link"
												style={{ color: "green" }}
												to="/login page"
											>
												<b style={{ color: "white" }}> LOGIN</b>
											</NavLink>
										)}
									</React.Fragment>
									<React.Fragment>
										{user && (
											<React.Fragment>
												{/* <div
													className="row"
													style={{
														width: "120%",
														marginLeft: "1%",
													}}
												>
													<NavLink
														className="nav-link "
														style={{ color: "green", float: "left" }}
														to={`/profile/${user._id}`}
													>
														<b style={{ color: "white" }}>Profile</b>
													</NavLink>

													<NavLink
														className="nav-link,dropdown-item"
														style={{ color: "green" }}
														to="/logout"
													>
														<b style={{ color: "white" }}> LogOut</b>
													</NavLink>
												</div> */}
												<div
													className="dropdown"
													style={{
														marginLeft: "30%",
														marginTop: "30%",
														fontSize: "80%",
														textAlign: "center",
													}}
												>
													<i
														className="fas fa-user fa-2x"
														data-toggle="dropdown"
														style={{ color: "white" }}
													></i>

													<div
														className="dropdown-menu bg-dark"
														style={{ width: "10%" }}
													>
														<NavLink
															className="nav-link,dropdown-item "
															style={{ marginLeft: "5%" }}
															to={`/profile/${user._id}`}
														>
															<b style={{ color: "white" }}>Profile</b>
														</NavLink>
														<br />
														<NavLink
															className="nav-link,dropdown-item"
															style={{ marginLeft: "5%" }}
															to="/logout"
														>
															<b style={{ color: "white" }}> LogOut</b>
														</NavLink>
													</div>
												</div>
											</React.Fragment>
										)}
									</React.Fragment>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
