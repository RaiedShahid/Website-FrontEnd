import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

class Login extends Component {
	state = {
		personInfo: {
			email: "",
			password: "",
		},
		errors: {},
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};
	handleChange = (e) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(e.currentTarget);

		if (errorMessage) errors[e.currentTarget.name] = errorMessage;
		else delete errors[e.currentTarget.name];

		const personInfo = { ...this.state.personInfo };
		personInfo[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ personInfo });
	};

	schema = {
		email: Joi.string().alphanum().min(5).max(20).required().label("UserName"),
		password: Joi.string().min(5).required().label("Password"),
	};

	validate = () => {
		const result = Joi.validate(this.state.personInfo, this.schema, {
			abortEarly: false,
		});
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("Submitted");
		// console.log(this.state.personInfo);
		const errors = this.validate();
		// console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) {
			return;
		}

		const formData = new FormData();

		formData.append("email", this.state.personInfo.email);
		formData.append("password", this.state.personInfo.password);

		const result = {
			email: this.state.personInfo.email.toLowerCase(),
			password: this.state.personInfo.password,
		};
		try {
			const r = await axios
				.post("http://localhost:4000/home/auth", result)
				.then((res) => {
					localStorage.setItem("token", res.data);
					window.location = "/";
				})
				.catch((err) => {
					console.log("Some problem ", err);
					alert("UserName or Password is incorrect");
				});
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.firstname = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="card bg-dark">
					<div className="card-body" style={{ color: "white" }}>
						<div
							className="card-title "
							style={{
								textAlign: "center",
							}}
						>
							<h2>Login</h2>
						</div>
						<div className="login_inner">
							<form onSubmit={this.handleSubmit} action="/action_page.php">
								<div className="form-group">
									<label htmlFor="email">UserName:</label>
									<input
										name="email"
										value={this.state.personInfo.email}
										onChange={this.handleChange}
										className="form-control"
										id="emaillogin"
									></input>
									{this.state.errors.email && (
										<div className="alert alert-danger">
											{this.state.errors.email}
										</div>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="loginpwd">Password:</label>
									<input
										name="password"
										value={this.state.personInfo.password}
										onChange={this.handleChange}
										type="password"
										className="form-control"
										id="lpwd"
									></input>
									{this.state.errors.password && (
										<div className="alert alert-danger">
											{this.state.errors.password}
										</div>
									)}
								</div>
								<div>
									{" "}
									<Link to={`/home/Login/Forget`}> Forget Password</Link>
								</div>

								<button type="submit" className="btn btn-info mt-1">
									LogIn
								</button>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Login;
