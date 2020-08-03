import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Forget extends Component {
	state = {
		email: "",
		password: "true",
		newpassword: "",
	};

	handleSubmit = async (e) => {
		console.log("Submited");
		console.log(this.state.email);

		if (this.state.newpassword.length < 5) {
			alert("Password Length should be Equal or Greater than 5");
			return;
		}
		console.log("Password length..", this.state.newpassword.length);

		const result = {
			email: this.state.email,
			password: this.state.newpassword,
		};
		var self = this;
		try {
			const r = await axios
				.put("http://localhost:4000/home/forget", result)
				.then((res) => {
					alert("Password Change successfully");
					window.location = "/login page";
				})
				.catch((err) => {
					console.log("Some problem ", err);
					alert("Email Does not exist");
				});
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				console.log("catch error");
			}
		}
	};
	handleChange = (e) => {
		const person = { ...this.state };
		person.email = e.currentTarget.value;
		this.setState(person);
	};
	handlePasswordChange = (e) => {
		const person = { ...this.state };
		person.newpassword = e.currentTarget.value;
		this.setState(person);
	};
	render() {
		return (
			<div
				className="container"
				style={{
					textAlign: "center",
					alignContent: "center",
					alignItems: "center",
					marginTop: "4%",
				}}
			>
				<div className="row">
					<div className="col-4"></div>
					<div className="card col-4 bg-dark">
						<div className="card-body">
							<div className="card-title " style={{ color: "white" }}>
								<h5> Forget Password</h5>
							</div>
							<div className="card-text" style={{ color: "white" }}>
								{" "}
								Enter Email
							</div>
							<div className="mt-3">
								<input
									name="email"
									value={this.state.email}
									onChange={this.handleChange}
									style={{ borderRadius: 8, width: "90%" }}
									type="text"
								/>
							</div>
							{this.state.password === "true" ? (
								<React.Fragment>
									<div className="card-text" style={{ color: "white" }}>
										{" "}
										Enter New Password
									</div>
									<div className="mt-3">
										<input
											name="email"
											value={this.state.newpassword}
											onChange={this.handlePasswordChange}
											style={{ borderRadius: 8, width: "90%" }}
											type="text"
										/>
									</div>
								</React.Fragment>
							) : (
								console.log(this.state.password)
							)}
							<button className="mt-2 btn btn-info" onClick={this.handleSubmit}>
								{" "}
								Done
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Forget;
