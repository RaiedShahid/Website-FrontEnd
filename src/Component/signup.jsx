import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
//import Navbar from './navbar';
//import Calendar from 'react-calendar';

class Signup extends Component {
	state = {
		personInfo: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			cpassword: "",
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
		this.setState({ personInfo, errors });
	};

	handleCPasswordChange = (e) => {
		const errors = { ...this.state.errors };
		const personInfo = { ...this.state.personInfo };
		personInfo[e.currentTarget.name] = e.currentTarget.value;

		if (e.currentTarget.value.length >= this.state.personInfo.password.length) {
			if (e.currentTarget.value != this.state.personInfo.password) {
				errors[e.currentTarget.name] = "Confirm Password must match password";

				this.setState({ personInfo, errors });
				return;
			}
		}
		delete errors[e.currentTarget.name];

		this.setState({ personInfo, errors });
	};

	schema = {
		firstname: Joi.string()
			.regex(/^[a-z A-Z]{3,25}$/)
			.required()
			.label("FIrst Name"),
		lastname: Joi.string()
			.regex(/^[a-z A-Z]{3,25}$/)
			.required()
			.label("Last Name"),
		email: Joi.string().alphanum().required().label("Email"),
		password: Joi.string().min(5).required().label("Password"),
		cpassword: Joi.any()
			.valid(Joi.ref("password"))
			.required()
			.options({ language: { any: { allowOnly: "must match password" } } })
			.label("Confirm Password"),
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
		console.log("Submitted");
		console.log(this.state.personInfo);
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		const formData = new FormData();

		formData.append("firstname", this.state.personInfo.firstname);
		formData.append("lastname", this.state.personInfo.lastname);
		formData.append("email", this.state.personInfo.email);
		formData.append("password", this.state.personInfo.password);
		formData.append("cpassword", this.state.personInfo.cpassword);

		const result = {
			firstname: this.state.personInfo.firstname,
			lastname: this.state.personInfo.lastname,
			email: this.state.personInfo.email.toLowerCase(),
			password: this.state.personInfo.password,
			cpassword: this.state.personInfo.cpassword,
		};
		try {
			const response = await axios
				.post("http://localhost:4000/home/signup", result)
				.then((res) => {
					localStorage.setItem("token", res.headers["x-auth-token"]);
					window.location = "/";
				})
				.catch((err) => {
					alert("User Already Exists \nPlease try with another UserName");
					console.log("Some problem", err);
				});
			// localStorage.setItem("token", response.headers["x-auth-token"]);
			// this.props.history.push("/home");
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
				<div
					className="card  "
					style={{
						backgroundColor: "#FFFAFA",
						borderColor: "black",
					}}
				>
					<div
						className="card-body"
						style={
							{
								// color: "white",
							}
						}
					>
						<div style={{ textAlign: "center" }}>
							<h1>Signup</h1>
						</div>
						<div className="login_inner">
							<form onSubmit={this.handleSubmit} action="/action_page.php">
								<div className="form-group">
									<label>First Name:</label>
									<input
										name="firstname"
										value={this.state.personInfo.firstname}
										onChange={this.handleChange}
										type="f_name"
										className="form-control"
										id="f_name"
									></input>
									{this.state.errors.firstname && (
										<div className="alert alert-danger">
											"Name should be minimum 3 and maximim 25 alphabets"
										</div>
									)}
								</div>
								<div className="form-group">
									<label>Last Name:</label>
									<input
										name="lastname"
										value={this.state.personInfo.lastname}
										onChange={this.handleChange}
										type="l_name"
										className="form-control"
										id="l_name"
									></input>
									{this.state.errors.lastname && (
										<div className="alert alert-danger">
											"Name should be minimum 3 and maximim 25 alphabets"
										</div>
									)}
								</div>
								<div className="form-group">
									<label>UserName:</label>
									<input
										name="email"
										value={this.state.personInfo.email}
										onChange={this.handleChange}
										// type="email"
										className="form-control"
										id="email"
									></input>
									{this.state.errors.email && (
										<div className="alert alert-danger">
											{this.state.errors.email}
										</div>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="pwd">Password:</label>
									<input
										name="password"
										value={this.state.personInfo.password}
										onChange={this.handleChange}
										type="password"
										className="form-control"
										id="spwd"
									></input>
									{this.state.errors.password && (
										<div className="alert alert-danger">
											{this.state.errors.password}
										</div>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="cpwd">Confirm Password:</label>
									<input
										name="cpassword"
										value={this.state.personInfo.cpassword}
										onChange={this.handleCPasswordChange}
										type="password"
										className="form-control"
										id="cpwd"
									></input>
									{this.state.errors.cpassword && (
										<div className="alert alert-danger">
											{this.state.errors.cpassword}
										</div>
									)}
								</div>

								<button type="submit" className="btn btn-info">
									SignUp
								</button>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Signup;
