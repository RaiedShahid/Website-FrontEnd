import React, { Component } from "react";
import Navbar from "./navbar";
import Signup from "./signup";
import Login from "./login";

class Login_Page extends Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="container"
					style={{ marginLeft: "15%", marginRight: "15%" }}
				>
					<div className="row" style={{ marginBottom: "5%" }}>
						<div className="col-md-4 mt-5">
							<Signup />
						</div>
						<div className="col-md-2"></div>

						<div className="col-md-4 mt-5">
							<Login />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Login_Page;
