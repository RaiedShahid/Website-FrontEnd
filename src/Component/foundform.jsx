import React, { Component } from "react";
//import Navbar from "./navbar";
import axios from "axios";
import Joi from "joi-browser";
//import Calendar from "react-calendar";
import prsn from "../images/imagePlaceholder.jpg";
import DatePicker from "react-datepicker";
import jwtDecode from "jwt-decode";
// const BaseJoi = require("joi");
// const ImageExtension = require("joi-image-extension");
// const JoiImage = BaseJoi.extend(ImageExtension);
import "react-datepicker/dist/react-datepicker.css";
const JoiPhoneNumberExtensions = require("joi-phone-number-extensions");
const JoiPhone = Joi.extend(JoiPhoneNumberExtensions);

class Foundform extends Component {
	state = {
		personInfo: {
			personImage: null,
			postingUser: "a",
			category: "Found",
			name: "",
			age: "",
			date: new Date(),
			cDate: new Date(),
			city: "Lahore",
			province: "Punjab",
			area: "",
			details: "",
			contactName: "",
			contactNumber: "",
			contactAddress: "",
		},
		errors: {},
	};

	componentDidMount() {
		const jwt = localStorage.getItem("token");
		const user = jwtDecode(jwt);
		const postingUser = user._id;
		const personInfo = { ...this.state.personInfo };
		personInfo.postingUser = postingUser;
		this.setState({ personInfo });
	}

	onChange = (date) => {
		const errors = { ...this.state.errors };
		// const errorMessage = this.validateProperty(date.currentTarget);
		const errorMessage = this.validate();
		// if (errorMessage) errors[date.currentTarget.name] = errorMessage;
		// else delete errors[date.currentTarget.name];

		const personInfo = { ...this.state.personInfo };
		personInfo.date = date;
		this.setState({ personInfo });
	};

	handleImageChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		var image = document.getElementById("output");
		if (e.target.files[0] == null) {
			if (personInfo.personImage == null) {
				image.src = prsn;
				return;
			} else {
				image.src = URL.createObjectURL(personInfo.personImage);
				return;
			}
		}

		personInfo.personImage = e.target.files[0];

		this.setState({ personInfo });
		console.log("Image", e.target.files[0]);

		image.src = URL.createObjectURL(e.target.files[0]);
		console.log("Image URL", image);

		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			var result = reader.result.split(",")[1];
			personInfo.personImage = result;
			this.setState({
				personInfo,
			});
			console.log(reader.result.split(",")[1]);
		};
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
		//const errorMessage = this.validate();
		if (errorMessage) errors[e.currentTarget.name] = errorMessage;
		else delete errors[e.currentTarget.name];

		if (e.currentTarget.name === "province") {
			console.log("province");
			if (e.currentTarget.value === "Sindth") {
				const personInfo = { ...this.state.personInfo };
				personInfo[e.currentTarget.name] = e.currentTarget.value;
				personInfo.city = "Karachi";
				this.setState({ personInfo, errors });
			} else if (e.currentTarget.value === "Punjab") {
				const personInfo = { ...this.state.personInfo };
				personInfo[e.currentTarget.name] = e.currentTarget.value;
				personInfo.city = "Lahore";
				this.setState({ personInfo, errors });
			} else if (e.currentTarget.value === "Balochistan") {
				const personInfo = { ...this.state.personInfo };
				personInfo.city = "Quetta";
				personInfo[e.currentTarget.name] = e.currentTarget.value;
				this.setState({ personInfo, errors });
			} else if (e.currentTarget.value === "Khyber Pakhtunkhwa") {
				const personInfo = { ...this.state.personInfo };
				personInfo.city = "Peshawar";
				personInfo[e.currentTarget.name] = e.currentTarget.value;
				this.setState({ personInfo, errors });
			}
		} else {
			const personInfo = { ...this.state.personInfo };
			personInfo[e.currentTarget.name] = e.currentTarget.value;
			this.setState({ personInfo, errors });
		}

		// console.log("city", this.state.personInfo.city);
	};

	schema = {
		category: Joi.string(),
		personImage: Joi.required(),
		postingUser: Joi.string(),
		name: Joi.string()
			.regex(/^[a-z A-Z]{3,25}$/)
			.required()
			.label("Full Name"),
		age: Joi.number().integer().min(1).max(110).required().label("Age"),
		date: Joi.date().required(),
		cDate: Joi.date().required(),
		city: Joi.string().required().label("City"),
		province: Joi.string().required().label("Province"),
		area: Joi.string().required().label("Area"),
		details: Joi.string().required().label("Details"),
		contactName: Joi.string()
			.regex(/^[a-z A-Z]{3,25}$/)
			.required()
			.label("Name"),
		// contactNumber: Joi.string().min(11).max(12).required().label("Number"),
		contactNumber: Joi.string()
			.trim()
			.regex(/^[0-9]{11}$/)
			.required()
			.label("Number"),
		contactAddress: Joi.string().required().label("Address"),
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

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted");
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		var image = document.getElementById("output");
		console.log("Image", image.src);
		if (
			image.src ==
			"http://localhost:3000/static/media/imagePlaceholder.7998d468.jpg"
		) {
			alert("Please Upload Image");
			return;
		}

		let newdate = this.state.personInfo.date + "";
		console.log(newdate);
		newdate = newdate.split(" ");
		const day = newdate[0];
		const month = newdate[1];
		const date = newdate[2];
		const year = newdate[3];

		const formData = new FormData();
		formData.append("personImage", this.state.personInfo.personImage);

		console.log("file: ", this.state.personInfo.personImage);

		formData.append("name", this.state.personInfo.name);
		formData.append("postingUser", this.state.personInfo.postingUser);
		formData.append("category", this.state.personInfo.category);
		formData.append("age", this.state.personInfo.age);
		formData.append("day", day);
		formData.append("month", month);
		formData.append("date", date);
		formData.append("year", year);
		formData.append("cDate", this.state.personInfo.cDate);
		formData.append("city", this.state.personInfo.city);
		formData.append("province", this.state.personInfo.province);
		formData.append("area", this.state.personInfo.area);
		formData.append("details", this.state.personInfo.details);
		formData.append("contactName", this.state.personInfo.contactName);
		formData.append("contactNumber", this.state.personInfo.contactNumber);
		formData.append("contactAddress", this.state.personInfo.contactAddress);
		try {
			axios
				.post("http://localhost:4000/home/form", formData)
				.then((res) => {
					window.location = "/";
					console.log(res.data);
				})
				.catch((err) => console.log("Some problem", err));
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
				<div className="container mt-3 col-md-8 ">
					<div className=" bg-success text-white py-2 ">
						<h1 className="text-center ">Found Form</h1>
					</div>

					<div className="card p-4">
						<div className="card-body">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h4
										className="text-center mb-3"
										style={{ backgroundColor: "" }}
									>
										Found Person Information
									</h4>
									<div className="row" style={{ marginLeft: "1%" }}>
										<div className="col-lg-5">
											{/* <label htmlFor="p_name" style={{ fontWeight: "bold" }}>
												{" "}
												Full Name
											</label> */}

											<div className="input-group  mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-user "></i>
													</span>
												</div>

												<input
													name="name"
													value={this.state.personInfo.name}
													onChange={this.handleChange}
													type="name"
													className="form-control"
													id="p_name"
													placeholder="Full Name"
												></input>
												{this.state.errors.name && (
													<div className="alert alert-danger">
														"Name should be minimum 3 and maximim 25 alphabets"
													</div>
												)}
											</div>
											{/* <label htmlFor="p_age" style={{ fontWeight: "bold" }}>
												Age
											</label> */}

											<div className="input-group  ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-child "></i>
													</span>
												</div>
												<input
													name="age"
													value={this.state.personInfo.age}
													onChange={this.handleChange}
													type="age"
													className="form-control"
													id="p_age"
													placeholder="Age"
												></input>
											</div>
											{this.state.errors.age && (
												<div className="alert alert-danger">
													"Age should be more than 1 and less than 111"
												</div>
											)}
											<br />
											{/* <b> Add Image</b>{" "}
									<input
										onChange={e => this.handleImageChange(e)}
										type="file"
										name="personImage"
									/> */}
											<input
												type="file"
												name="personImage"
												onChange={(e) => this.handleImageChange(e)}
												id="img"
												style={{ display: "none" }}
											/>
											<label className="btn btn-primary" htmlFor="img">
												Upload Image
											</label>
										</div>
										<div className="col-md-6">
											<img
												style={{
													display: "block",
													marginLeft: "auto",
													marginRight: "auto",
													width: "200px",
													height: "200px",
												}}
												id="output"
												src={prsn}
											/>
										</div>
									</div>

									<hr />

									<div style={{ marginTop: 20 }}>
										<h4 className="text-center " style={{ color: "" }}>
											Found Details
										</h4>
										<div className="form-group ">
											<label style={{ fontWeight: "bold", marginRight: "3%" }}>
												Date
											</label>
											{/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
											<DatePicker
												onChange={this.onChange}
												selected={this.state.personInfo.date}
												name="date"
											/>
											<div className="row" style={{ marginTop: 20 }}>
												<div className=" col-6 col-sm-6 col-md-5 col-lg-3">
													<label
														htmlFor="l_province"
														style={{ fontWeight: "bold" }}
													>
														Province
													</label>
													<select
														name="province"
														value={this.state.personInfo.province}
														onChange={this.handleChange}
														className="form-control"
														id="l_province"
													>
														<option>Punjab</option>
														<option>Sindth</option>
														<option>Balochistan</option>
														<option>Khyber Pakhtunkhwa</option>
													</select>
													{/* {this.state.errors.province && (
														<div className="alert alert-danger">
															{this.state.errors.province}
														</div>
													)} */}
												</div>

												{this.state.personInfo.province === "Punjab" ? (
													<div className="col-6 col-sm-6 col-md-5 col-lg-3">
														<label
															htmlFor="l_city"
															style={{ fontWeight: "bold" }}
														>
															City
														</label>
														<select
															name="city"
															value={this.state.personInfo.city}
															onChange={this.handleChange}
															className="form-control"
															id="l_city"
														>
															<option>Lahore</option>
															<option>Faisalabad</option>
															<option>Multan</option>
															<option>Rawalpindi</option>
														</select>
														{this.state.errors.city && (
															<div className="alert alert-danger">
																{this.state.errors.city}
															</div>
														)}
													</div>
												) : null}

												{this.state.personInfo.province === "Sindth" ? (
													<div className="col-6 col-sm-6 col-md-5 col-lg-3">
														<label
															htmlFor="l_city"
															style={{ fontWeight: "bold" }}
														>
															City
														</label>
														<select
															name="city"
															value={this.state.personInfo.city}
															onChange={this.handleChange}
															className="form-control"
															id="l_city"
														>
															<option>Karachi</option>
															<option>Hyderabad</option>
															<option>Sukkhur</option>
														</select>
														{this.state.errors.city && (
															<div className="alert alert-danger">
																{this.state.errors.city}
															</div>
														)}
													</div>
												) : null}

												{this.state.personInfo.province === "Balochistan" ? (
													<div className="col-6 col-sm-6 col-md-5 col-lg-3">
														<label
															htmlFor="l_city"
															style={{ fontWeight: "bold" }}
														>
															City
														</label>
														<select
															name="city"
															value={this.state.personInfo.city}
															onChange={this.handleChange}
															className="form-control"
															id="l_city"
														>
															<option>Quetta</option>
															<option>Gwadar</option>
															<option>Sibbi</option>
															<option>Turbat</option>
														</select>
														{this.state.errors.city && (
															<div className="alert alert-danger">
																{this.state.errors.city}
															</div>
														)}
													</div>
												) : null}

												{this.state.personInfo.province ===
												"Khyber Pakhtunkhwa" ? (
													<div className="col-6 col-sm-6 col-md-5 col-lg-3">
														<label
															htmlFor="l_city"
															style={{ fontWeight: "bold" }}
														>
															City
														</label>
														<select
															name="city"
															value={this.state.personInfo.city}
															onChange={this.handleChange}
															className="form-control"
															id="l_city"
														>
															<option>Peshawar</option>
															<option>Abbottabad</option>
															<option>Mardan</option>
															<option>Bannu</option>
														</select>
														{this.state.errors.city && (
															<div className="alert alert-danger">
																{this.state.errors.city}
															</div>
														)}
													</div>
												) : null}

												<div className="col-md-9 col-lg-3">
													<label
														htmlFor="l_area"
														style={{ fontWeight: "bold" }}
													>
														Area
													</label>
													<textarea
														name="area"
														value={this.state.personInfo.area}
														onChange={this.handleChange}
														className="form-control"
														id="-_area"
														rows="2"
														placeholder="i.e johar Town, DHA "
														style={{ width: 300 }}
													></textarea>
													{this.state.errors.area && (
														<div
															style={{ width: 300 }}
															className="alert alert-danger"
														>
															{this.state.errors.area}
														</div>
													)}
												</div>
											</div>
											<div style={{ marginTop: "" }}>
												<label
													htmlFor="p_other_details"
													style={{ fontWeight: "bold" }}
												>
													Other Details
												</label>
												<textarea
													name="details"
													value={this.state.personInfo.details}
													onChange={this.handleChange}
													className="form-control"
													id="p_other_details"
													rows="3"
												></textarea>
												{this.state.errors.details && (
													<div className="alert alert-danger">
														{this.state.errors.details}
													</div>
												)}
											</div>
										</div>
									</div>
									<hr />
									<div style={{ marginTop: 20 }}>
										<h4
											className="text-center mb-4"
											style={{ backgroundColor: "" }}
										>
											Contact Information
										</h4>
										<div className="row">
											{/* <label htmlFor="c_name" style={{ fontWeight: "bold" }}>
												{" "}
												Full Name
											</label> */}

											<div className="input-group   col-lg-6">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-user "></i>
													</span>
												</div>
												<input
													name="contactName"
													value={this.state.personInfo.contactName}
													onChange={this.handleChange}
													type="name"
													className="form-control"
													id="c_name"
													placeholder="Full Name"
												></input>
											</div>

											{/* <label htmlFor="c_Contact" style={{ fontWeight: "bold" }}>
												Contact Number
											</label> */}

											<div className="input-group col-lg-6 ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i
															className="fa fa-address-book "
															aria-hidden="true"
														></i>
													</span>
												</div>

												<input
													name="contactNumber"
													value={this.state.personInfo.contactNumber}
													onChange={this.handleChange}
													type="contact"
													className="form-control"
													id="c_Contact"
													placeholder="03..."
												></input>
											</div>
										</div>

										<div className="row">
											<div className="col-lg-6">
												{this.state.errors.contactName && (
													<div className="alert alert-danger">
														"Name should be minimum 3 and maximim 25 alphabets"
													</div>
												)}
											</div>

											<div className="col-lg-6">
												{this.state.errors.contactNumber && (
													<div className="alert alert-danger">
														"No Spaces and Number should be equal to 11"
													</div>
												)}
											</div>
										</div>
										<label
											className="mt-3"
											htmlFor="c_Address"
											style={{ fontWeight: "bold" }}
										>
											Address
										</label>
										<textarea
											name="contactAddress"
											value={this.state.personInfo.contactAddress}
											onChange={this.handleChange}
											className="form-control"
											id="c_Address"
											rows="3"
										></textarea>
										{this.state.errors.contactAddress && (
											<div className="alert alert-danger">
												{this.state.errors.contactAddress}
											</div>
										)}
									</div>
								</div>
								<button
									style={{ marginLeft: "3%" }}
									type="submit"
									className="btn btn-primary"
									// disabled={this.validate()}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="footer"></div>
			</React.Fragment>
		);
	}
}
export default Foundform;
