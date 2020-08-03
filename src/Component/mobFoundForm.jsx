import React, { Component } from "react";
//import Navbar from "./navbar";
import axios from "axios";
import Joi from "joi-browser";
//import Calendar from "react-calendar";
import prsn from "../images/car.jpg";
import DatePicker from "react-datepicker";
import jwtDecode from "jwt-decode";
// const BaseJoi = require("joi");
// const ImageExtension = require("joi-image-extension");
// const JoiImage = BaseJoi.extend(ImageExtension);
import "react-datepicker/dist/react-datepicker.css";
const JoiPhoneNumberExtensions = require("joi-phone-number-extensions");
const JoiPhone = Joi.extend(JoiPhoneNumberExtensions);

class MobFoundform extends Component {
	state = {
		personInfo: {
			personImage: "",
			personImage2: "",
			personImage3: "",
			postingUser: "a",
			category: "Found",
			mobilename: "",
			company: "Samsung",
			ime: "",
			color: "Red",
			type: "Mobile",
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
		var image2 = document.getElementById("output2");
		var image3 = document.getElementById("output3");
		if (e.target.files.length > 3) {
			alert("Maximum 3 pictures are allowed");
			return;
		}

		if (e.target.files[0] == null) {
			if (personInfo.personImage == "") {
				image.src = prsn;
				image2.src = prsn;
				image3.src = prsn;
				return;
			} else {
				image.src = URL.createObjectURL(personInfo.personImage);
				personInfo.personImage2 != ""
					? (image2.src = URL.createObjectURL(personInfo.personImage2))
					: (image2.src = prsn);
				personInfo.personImage3 != ""
					? (image3.src = URL.createObjectURL(personInfo.personImage3))
					: (image3.src = prsn);
				return;
			}
		}

		// personInfo.personImage = e.target.files[0];

		// this.setState({ personInfo });
		// console.log("Image", e.target.files[0]);

		if (e.target.files.length < 2) {
			// console.log(e.target.files[0].type);
			if (
				e.target.files[0].type == "image/png" ||
				e.target.files[0].type == "image/jpeg" ||
				e.target.files[0].type == "image/jpg" ||
				e.target.files[0].type == "image/PNG"
			) {
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
			} else {
				alert("Only png,jpg or Jpeg pics are allowed");
				return;
			}
		} else if (e.target.files.length < 3) {
			if (
				e.target.files[0].type == "image/png" ||
				e.target.files[0].type == "image/jpeg" ||
				e.target.files[0].type == "image/jpg" ||
				e.target.files[0].type == "image/PNG"
			) {
				if (
					e.target.files[1].type == "image/png" ||
					e.target.files[1].type == "image/jpeg" ||
					e.target.files[1].type == "image/jpg" ||
					e.target.files[1].type == "image/PNG"
				) {
					image.src = URL.createObjectURL(e.target.files[0]);
					image2.src = URL.createObjectURL(e.target.files[1]);
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
					let file2 = e.target.files[1];
					let reader2 = new FileReader();
					reader2.readAsDataURL(file2);
					reader2.onloadend = () => {
						var result = reader2.result.split(",")[1];
						personInfo.personImage2 = result;
						this.setState({
							personInfo,
						});
						console.log("PERSON 2 " + personInfo.personImage2);
					};
				} else {
					alert("Only png,jpg or Jpeg pics are allowed");
					return;
				}
			} else {
				alert("Only png,jpg or Jpeg pics are allowed");
				return;
			}
		} else {
			if (
				e.target.files[0].type == "image/png" ||
				e.target.files[0].type == "image/jpeg" ||
				e.target.files[0].type == "image/jpg" ||
				e.target.files[0].type == "image/PNG"
			) {
				if (
					e.target.files[1].type == "image/png" ||
					e.target.files[1].type == "image/jpeg" ||
					e.target.files[1].type == "image/jpg" ||
					e.target.files[1].type == "image/PNG"
				) {
					if (
						e.target.files[2].type == "image/png" ||
						e.target.files[2].type == "image/jpeg" ||
						e.target.files[2].type == "image/jpg" ||
						e.target.files[2].type == "image/PNG"
					) {
						image.src = URL.createObjectURL(e.target.files[0]);
						image2.src = URL.createObjectURL(e.target.files[1]);
						image3.src = URL.createObjectURL(e.target.files[2]);
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
						let file2 = e.target.files[1];
						let reader2 = new FileReader();
						reader2.readAsDataURL(file2);
						reader2.onloadend = () => {
							var result = reader2.result.split(",")[1];
							personInfo.personImage2 = result;
							this.setState({
								personInfo,
							});
							console.log("PERSON 2 " + personInfo.personImage2);
						};
						let file3 = e.target.files[2];
						let reader3 = new FileReader();
						reader3.readAsDataURL(file3);
						reader3.onloadend = () => {
							var result = reader3.result.split(",")[1];
							personInfo.personImage3 = result;
							this.setState({
								personInfo,
							});
							console.log("PERSON 3 " + personInfo.personImage3);
						};
					} else {
						alert("Only png,jpg or Jpeg pics are allowed");
						return;
					}
				} else {
					alert("Only png,jpg or Jpeg pics are allowed");
					return;
				}
			} else {
				alert("Only png,jpg or Jpeg pics are allowed");
				return;
			}
		}
	};

	deletepic = (e) => {
		console.log(e);
		console.log("bUTTON cLICKED");
		var image = document.getElementById("output");
		var image2 = document.getElementById("output2");
		var image3 = document.getElementById("output3");
		if (e === "output") {
			const personInfo = { ...this.state.personInfo };

			if (personInfo.personImage2 != "" && personInfo.personImage3 != "") {
				image.src = "data:image/png;base64," + personInfo.personImage2;
				image2.src = "data:image/png;base64," + personInfo.personImage3;
				image3.src = prsn;
				personInfo.personImage = personInfo.personImage2;
				personInfo.personImage2 = personInfo.personImage3;
				personInfo.personImage3 = "";
				this.setState({ personInfo });
			} else if (personInfo.personImage2 != "") {
				image.src = "data:image/png;base64," + personInfo.personImage2;
				image2.src = prsn;
				personInfo.personImage = personInfo.personImage2;
				personInfo.personImage2 = "";
				this.setState({ personInfo });
			} else {
				image.src = prsn;
				personInfo.personImage = "";
				this.setState({ personInfo });
			}
		} else if (e === "output2") {
			const personInfo = { ...this.state.personInfo };

			if (personInfo.personImage != "" && personInfo.personImage3 != "") {
				console.log("COming...");
				image2.src = "data:image/png;base64," + personInfo.personImage3;
				image3.src = prsn;
				personInfo.personImage2 = personInfo.personImage3;
				personInfo.personImage3 = "";
				this.setState({ personInfo });
			} else if (personInfo.personImage3 == "") {
				image2.src = prsn;
				personInfo.personImage2 = "";
				this.setState({ personInfo });
			}
		} else if (e === "output3") {
			const personInfo = { ...this.state.personInfo };

			if (personInfo.personImage != "" && personInfo.personImage2 != "") {
				image3.src = prsn;
				personInfo.personImage3 = "";
				this.setState({ personInfo });
			}
		}
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
		personImage2: Joi.required(),
		personImage3: Joi.required(),
		postingUser: Joi.string(),
		mobilename: Joi.string()
			.regex(/^[a-z A-Z 0-9]{5,25}$/)
			.required()
			.label("Full Name"),
		company: Joi.string().required().label("Company"),
		type: Joi.string()

			.required()
			.label("type"),
		ime: Joi.string()
			.trim()
			.regex(/^[0-9]{15}$/)
			.required()
			.label("IMEnumber"),
		color: Joi.string().required().label("Color"),
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
		if (image.src == prsn) {
			alert("Please Upload Atleast One Image");
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
		formData.append("personImage2", this.state.personInfo.personImage2);
		formData.append("personImage3", this.state.personInfo.personImage3);

		console.log("file: ", this.state.personInfo.personImage);

		formData.append("mobilename", this.state.personInfo.mobilename);
		formData.append("postingUser", this.state.personInfo.postingUser);
		formData.append("category", this.state.personInfo.category);
		formData.append("company", this.state.personInfo.company);
		formData.append("ime", this.state.personInfo.ime);
		formData.append("color", this.state.personInfo.color);
		formData.append("type", this.state.personInfo.type);
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
				.post("http://localhost:4000/home/mobileform", formData)
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
										Found Device Information
									</h4>

									<div className="row" style={{ marginLeft: "1%" }}>
										<div className="col-lg-6">
											<div className="input-group  mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fa fa-mobile "></i>
													</span>
												</div>

												<input
													name="mobilename"
													value={this.state.personInfo.mobilename}
													onChange={this.handleChange}
													type="name"
													className="form-control"
													id="p_name"
													placeholder="Mobile Name"
												></input>
												{this.state.errors.mobilename && (
													<div className="alert alert-danger">
														"Name should be minimum 5 and maximim 35 alphabets"
													</div>
												)}
											</div>
										</div>

										<div className=" col-lg-6 input-group mb-3 ">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fas  ">Company</i>
												</span>
											</div>
											<select
												name="company"
												value={this.state.personInfo.company}
												onChange={this.handleChange}
												type="age"
												className="form-control"
												id="p_age"
												placeholder="Company"
											>
												<option>Samsung</option>
												<option>Apple</option>
												<option>Huawei</option>
												<option>Oppo</option>
												<option>Realme</option>
												<option>Redmi</option>
												<option>Infinix</option>
												<option>Tecno</option>
												<option>QMobile</option>
											</select>
											{this.state.errors.company && (
												<div className="alert alert-danger">
													"Company is required"
												</div>
											)}
										</div>

										<br />
									</div>
									<div className="row" style={{ marginLeft: "1%" }}>
										<div className="col-xl-6">
											<div className="input-group  mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas  ">IME </i>
													</span>
												</div>
												<input
													name="ime"
													value={this.state.personInfo.ime}
													onChange={this.handleChange}
													type="name"
													className="form-control"
													id="p_name"
													placeholder="IME Number"
												></input>
												{this.state.errors.ime && (
													<div className="alert alert-danger">
														"Plate Number is Required "
													</div>
												)}
											</div>
										</div>

										<div className="input-group col-lg-6 col-xl-3 mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fas  ">Color</i>
												</span>
											</div>
											<select
												name="color"
												value={this.state.personInfo.color}
												onChange={this.handleChange}
												type="name"
												className="form-control"
												id="p_name"
												placeholder="Color"
											>
												<option>Red</option>
												<option>Blue</option>
												<option>Orang</option>
												<option>White</option>
												<option>Pink</option>
												<option>BLack</option>
											</select>
											{this.state.errors.color && (
												<div className="alert alert-danger">
													"Color is required"
												</div>
											)}
										</div>
										<div className="input-group col-lg-6 col-xl-3  mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fas  ">Type</i>
												</span>
											</div>
											<select
												name="type"
												value={this.state.personInfo.type}
												onChange={this.handleChange}
												className="form-control"
												id="l_province"
											>
												<option>Mobile</option>
												<option>Tablet</option>
											</select>
										</div>
									</div>
									<hr />
									<h4
										className="text-center mb-3"
										style={{ backgroundColor: "" }}
									>
										Device Images
									</h4>
									<div className="row">
										<div className="col-xl-4">
											{this.state.personInfo.personImage != "" ? (
												<button
													// style={{ width: "100%" }}
													onClick={() => this.deletepic("output")}
													className="btn-outline-danger"
													type="button"
												>
													X
												</button>
											) : (
												<br />
											)}

											<img
												style={{
													display: "block",
													marginLeft: "auto",
													marginRight: "auto",
													width: "250px",
													height: "300px",
													// objectFit: "cover",
												}}
												id="output"
												src={prsn}
											/>
										</div>
										<div className="col-xl-4">
											{this.state.personInfo.personImage2 != "" ? (
												<button
													// style={{ width: "100%" }}
													onClick={() => this.deletepic("output2")}
													className="btn-outline-danger"
													type="button"
												>
													X
												</button>
											) : (
												<br />
											)}
											<img
												style={{
													display: "block",
													marginLeft: "auto",
													marginRight: "auto",
													width: "250px",
													height: "300px",
												}}
												id="output2"
												src={prsn}
											/>
										</div>
										<div className="col-xl-4">
											{this.state.personInfo.personImage3 != "" ? (
												<button
													// style={{ width: "100%" }}
													onClick={() => this.deletepic("output3")}
													className="btn-outline-danger"
													type="button"
												>
													X
												</button>
											) : (
												<br />
											)}
											<img
												style={{
													display: "block",
													marginLeft: "auto",
													marginRight: "auto",
													width: "250px",
													height: "300px",
												}}
												id="output3"
												src={prsn}
											/>
										</div>
									</div>
									<br />
									<div>
										<input
											type="file"
											name="personImage"
											onChange={(e) => this.handleImageChange(e)}
											id="img"
											style={{ display: "none" }}
											multiple
										/>
										<label
											className="btn btn-primary"
											style={{ float: "left" }}
											htmlFor="img"
										>
											Upload Image
										</label>
										<p style={{ textAlign: "center" }}>
											Maximum 3 images can be uploaded
										</p>
										<p style={{ textAlign: "center" }}>
											In case you dont have vehicle oroginal picture then
											download the picture from internet.
										</p>
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
														"No Spaces and Length should be equal to 11"
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
export default MobFoundform;
