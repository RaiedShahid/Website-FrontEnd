import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import prsn from "../images/imagePlaceholder.jpg";

class ProfileSideMenu extends Component {
	state = { username: [] };

	componentDidMount() {
		try {
			const jwt = localStorage.getItem("token");
			const user = jwtDecode(jwt);
			const username = { ...this.state.username };
			// person = user;
			console.log("JWT User", user.name);
			this.setState({ username: user.name });
			console.log("State", this.state.username);
		} catch (ex) {}
	}

	render() {
		const username = this.state.username;
		console.log("username...", username);
		const { length } = this.props;
		return (
			<div>
				<img
					className="profileimg"
					style={{ marginLeft: "10%" }}
					src={prsn}
					alt=""
					width="70%"
				/>{" "}
				<br />
				<br />
				<h2 style={{ color: "white", marginLeft: "4%" }}>{username}</h2>
				<h5 style={{ color: "white", marginLeft: "4%" }}>Active Ads</h5>
				<h6 style={{ color: "white", marginLeft: "4%" }}>{length}</h6>
			</div>
		);
	}
}

export default ProfileSideMenu;
