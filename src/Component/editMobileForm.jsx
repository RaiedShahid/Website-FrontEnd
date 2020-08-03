import React, { Component } from "react";
import axios from "axios";
import prsn from "../images/imagePlaceholder.jpg";
import DatePicker from "react-datepicker";
//import jwtDecode from "jwt-decode";
import Joi from "joi-browser";
import "react-datepicker/dist/react-datepicker.css";
const JoiPhoneNumberExtensions = require("joi-phone-number-extensions");
const JoiPhone = Joi.extend(JoiPhoneNumberExtensions);

class EditMobileForm extends Component {
	state = {
		personInfo: {
			name: "",
			age: null,
			province: "",
			city: "",
			area: "",
			details: "",
			contactName: "",
			contactNumber: "",
			contactAddress: "",
		},
		getImage: null,
		errors: {},
		change: "",
	};

	componentDidMount() {
		axios
			.get(`http://localhost:4000/home/${this.props.match.params.id}`)
			.then((res) => {
				const personInfo = res.data;

				this.setState({ personInfo });
			})
			.catch((err) => console.log("Some problem", err));

		//	console.log("folder", this.props.match.params.folder);

		// axios
		// 	.get(
		// 		`http://localhost:4000/home/${this.props.match.params.folder}/${this.props.match.params.image}`,
		// 		{
		// 			responseType: "arraybuffer",
		// 		}
		// 	)
		// 	.then((response) => {
		// 		const personInfo = { ...this.state.personInfo };
		// 		personInfo.personImage = response.data;
		// 		// console.log("PersonInfo PersonImage", personInfo.personImage);
		// 		this.setState({ personInfo });
		// 		let image = btoa(
		// 			new Uint8Array(response.data).reduce(
		// 				(data, byte) => data + String.fromCharCode(byte),
		// 				""
		// 			)
		// 		);
		// 		console.log("image", image);

		// 		const getImage = `data:${response.headers[
		// 			"content-type"
		// 		].toLowerCase()};base64,${image}`;
		// 		//	console.log("getImage", getImage);
		// 		this.setState({ getImage });
		// 	})
		// 	.catch((err) => console.log("Some problem", err));

		//console.log("cdm state", this.state.personInfo.personImage);
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
			if (personInfo.personImage == "") {
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
	handleImageChange2 = (e) => {
		const personInfo = { ...this.state.personInfo };
		var image = document.getElementById("output2");
		if (e.target.files[0] == null) {
			if (personInfo.personImage2 == "") {
				image.src = prsn;
				return;
			} else {
				image.src = URL.createObjectURL(personInfo.personImage2);
				return;
			}
		}

		personInfo.personImage2 = e.target.files[0];

		console.log("Image is ", e.target.files[0]);

		// image.src = URL.createObjectURL(e.target.files[0]);
		console.log("Image URL", image);

		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			var result = reader.result.split(",")[1];
			personInfo.personImage2 = result;
			this.setState({
				personInfo,
			});
			console.log(reader.result.split(",")[1]);
		};
	};
	handleImageChange3 = (e) => {
		const personInfo = { ...this.state.personInfo };
		var image = document.getElementById("output3");
		if (e.target.files[0] == null) {
			if (personInfo.personImage3 == "") {
				image.src = prsn;
				return;
			} else {
				image.src = URL.createObjectURL(personInfo.personImage3);
				return;
			}
		}

		personInfo.personImage3 = e.target.files[0];

		// this.setState({ personInfo });
		console.log("Image 3", e.target.files[0]);

		// image.src = URL.createObjectURL(e.target.files[0]);
		console.log("Image URL", image);

		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			var result = reader.result.split(",")[1];
			personInfo.personImage3 = result;
			this.setState({
				personInfo,
			});
			console.log("personImage3", reader.result.split(",")[1]);
		};
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
	};

	schema = {
		_id: Joi.string(),
		__v: Joi.number(),
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
		date: Joi.string(),
		city: Joi.string().required().label("City"),
		province: Joi.string().required().label("Province"),
		area: Joi.string().required().label("Area"),
		details: Joi.string().required().label("Details"),
		cDate: Joi.string().required(),
		day: Joi.string().required(),
		month: Joi.string().required(),
		year: Joi.string().required(),
		contactName: Joi.string()
			.regex(/^[a-z A-Z]{3,25}$/)
			.required()
			.label("Name"),
		contactNumber: Joi.string()
			.trim()
			.regex(/^[0-9]{11}$/)
			.required(),
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

	// dataURItoBlob = (dataURI) => {
	// 	// convert base64/URLEncoded data component to raw binary data held in a string
	// 	var byteString;
	// 	if (dataURI.split(",")[0].indexOf("base64") >= 0)
	// 		byteString = atob(dataURI.split(",")[1]);
	// 	else byteString = unescape(dataURI.split(",")[1]);

	// 	// separate out the mime component
	// 	var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

	// 	// write the bytes of the string to a typed array
	// 	var ia = new Uint8Array(byteString.length);
	// 	for (var i = 0; i < byteString.length; i++) {
	// 		ia[i] = byteString.charCodeAt(i);
	// 	}

	// 	return new Blob([ia], {
	// 		type: mimeString,
	// 	});
	// };
	// blobToFile = (theBlob, fileName) => {
	// 	//A Blob() is almost a File() - it's just missing the two properties below which we will add
	// 	theBlob.lastModifiedDate = new Date();
	// 	theBlob.filename = fileName;
	// 	return theBlob;
	// };

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted");
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		const formData = new FormData();

		// var dataURL = this.state.getImage;
		// var blob = this.dataURItoBlob(dataURL);
		// console.log("blob", blob);
		// var myFile = this.blobToFile(blob, this.props.match.params.image);
		// console.log("file", myFile);

		// console.log("change", this.state.change);
		// //formData.append("personImage", this.state.personInfo.personImage);
		// let change = this.state.change;
		// if (change === "") {
		// 	formData.append("personImage", myFile);
		// } else {
		// 	formData.append("personImage", this.state.personInfo.personImage);
		// }

		// const personInfo = { ...this.state.personInfo };
		// personInfo.personImage = formData;

		// this.setState({ personInfo });

		formData.append("personImage", this.state.personInfo.personImage);
		formData.append("personImage2", this.state.personInfo.personImage2);
		formData.append("personImage3", this.state.personInfo.personImage3);
		formData.append("mobilename", this.state.personInfo.mobilename);
		formData.append("company", this.state.personInfo.company);
		formData.append("ime", this.state.personInfo.ime);
		formData.append("color", this.state.personInfo.color);
		formData.append("type", this.state.personInfo.type);
		formData.append("postingUser", this.state.personInfo.postingUser);
		formData.append("category", this.state.personInfo.category);
		formData.append("city", this.state.personInfo.city);
		formData.append("province", this.state.personInfo.province);
		formData.append("area", this.state.personInfo.area);
		formData.append("details", this.state.personInfo.details);
		formData.append("contactName", this.state.personInfo.contactName);
		formData.append("contactNumber", this.state.personInfo.contactNumber);
		formData.append("contactAddress", this.state.personInfo.contactAddress);

		try {
			axios
				.put(
					`http://localhost:4000/home/mobile/${this.props.match.params.id}`,
					formData
				)
				.then((res) => {
					console.log(res.data);
					window.location = `/`;
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
		console.log("Render :", this.state.personInfo);
		//console.log("Render :", this.state.getImage);
		return (
			<React.Fragment>
				<div className="container mt-3 col-md-8 ">
					<div className="bg-info text-white py-2">
						<h1 style={{ marginLeft: "40%" }}>Update Form</h1>
					</div>

					<div className="card p-4">
						<div className="card-body">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h4 className="text-center mb-3">
										{this.state.personInfo.category} Device Information
									</h4>
									<div className="row" style={{ marginLeft: "1%" }}>
										<div className="col-md-6" style={{ width: 700 }}>
											<label htmlFor="p_name" style={{ fontWeight: "bold" }}>
												{" "}
												Mobile Name
											</label>

											<input
												name="mobilename"
												value={this.state.personInfo.mobilename}
												onChange={this.handleChange}
												type={
													this.state.personInfo.name != ""
														? "name"
														: "companyname"
												}
												className="form-control"
												id="p_name"
												placeholder="Mobile Name"
											></input>
											{this.state.errors.mobilename && (
												<div className="alert alert-danger">
													"MobileName should be minimum 5 and maximim 25
													alphabets"
												</div>
											)}

											<label htmlFor="p_age" style={{ fontWeight: "bold" }}>
												IME
											</label>
											<input
												name="ime"
												value={this.state.personInfo.ime}
												onChange={this.handleChange}
												type="age"
												className="form-control"
												id="p_age"
												placeholder="Age"
											></input>
											{this.state.errors.ime && (
												<div className="alert alert-danger">
													"IME is required"
												</div>
											)}

											<label htmlFor="p_age" style={{ fontWeight: "bold" }}>
												Type
											</label>
											<select
												name="type"
												value={this.state.personInfo.type}
												onChange={this.handleChange}
												type="age"
												className="form-control"
												id="p_age"
												placeholder="Age"
											>
												<option>Mobile</option>
												<option>Tablet</option>
											</select>
											{this.state.errors.type && (
												<div className="alert alert-danger">
													"Type is required"
												</div>
											)}
											<br />
										</div>
										<div className="col-md-6">
											<label htmlFor="p_age" style={{ fontWeight: "bold" }}>
												Company
											</label>
											<input
												name="company"
												value={this.state.personInfo.company}
												onChange={this.handleChange}
												type="age"
												className="form-control"
												id="p_age"
												placeholder="Age"
											></input>
											{this.state.errors.company && (
												<div className="alert alert-danger">
													"Company is required"
												</div>
											)}

											<label htmlFor="p_age" style={{ fontWeight: "bold" }}>
												Color
											</label>
											<input
												name="color"
												value={this.state.personInfo.color}
												onChange={this.handleChange}
												type="age"
												className="form-control"
												id="p_age"
												placeholder="Age"
											></input>
											{this.state.errors.color && (
												<div className="alert alert-danger">
													"Color is required"
												</div>
											)}
										</div>
									</div>
									<br />
									<div className="row">
										<div className="col-lg-4">
											<br />
											<img
												style={{
													objectFit: "cover",
													marginLeft: "auto",
													marginRight: "auto",
													width: "100%",
													height: "300px",
												}}
												id="output"
												// src={this.state.getImage}
												src={
													"data:image/png;base64," +
													this.state.personInfo.personImage
												}
											/>
										</div>
										<div className="col-lg-4">
											{this.state.personInfo.personImage2 != "" ? (
												<React.Fragment>
													<button
														// style={{ width: "100%" }}
														onClick={() => this.deletepic("output2")}
														className="btn-outline-danger"
														type="button"
													>
														X
													</button>
													<img
														style={{
															display: "block",
															marginLeft: "auto",
															marginRight: "auto",
															width: "250px",
															height: "300px",
														}}
														id="output2"
														src={
															"data:image/png;base64," +
															this.state.personInfo.personImage2
														}
													/>
												</React.Fragment>
											) : (
												<React.Fragment>
													<br />
													<div
														style={{
															alignContent: "center",
															alignItems: "center",
															alignSelf: "center",
														}}
													>
														<label className=" btn btn-info" htmlFor="img2">
															<i class="fa-1x fa fa-plus-circle">Add Image</i>
														</label>
													</div>
												</React.Fragment>
											)}{" "}
										</div>
										<div className="col-lg-4">
											{this.state.personInfo.personImage3 != "" ? (
												<React.Fragment>
													<button
														// style={{ width: "100%" }}
														onClick={() => this.deletepic("output3")}
														className="btn-outline-danger"
														type="button"
													>
														X
													</button>
													<img
														style={{
															display: "block",
															marginLeft: "auto",
															marginRight: "auto",
															width: "250px",
															height: "300px",
														}}
														id="output3"
														src={
															"data:image/png;base64," +
															this.state.personInfo.personImage3
														}
													/>
												</React.Fragment>
											) : this.state.personInfo.personImage2 != "" ? (
												<React.Fragment>
													<br />
													<label className=" btn btn-info" htmlFor="img3">
														<i class="fa-1x fa fa-plus-circle">Add Image</i>
													</label>
												</React.Fragment>
											) : null}
										</div>
									</div>
									<br />

									<input
										type="file"
										name="personImage"
										onChange={(e) => this.handleImageChange(e)}
										id="img"
										style={{ display: "none" }}
									/>
									<input
										type="file"
										name="personImage2"
										onChange={(e) => this.handleImageChange2(e)}
										id="img2"
										style={{ display: "none" }}
									/>
									<input
										type="file"
										name="personImage3"
										onChange={(e) => this.handleImageChange3(e)}
										id="img3"
										style={{ display: "none" }}
									/>
									<label className="btn btn-primary" htmlFor="img">
										Change Image
									</label>

									<hr />

									<div style={{ marginTop: 20 }}>
										<h4 className="text-center mb-3">
											{this.state.personInfo.category} Details
										</h4>
										<div className="form-group " style={{ marginLeft: "3%" }}>
											{/* <label style={{ fontWeight: "bold", marginRight: "3%" }}>
										Date
									</label>
									{/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
											{/* <DatePicker
										onChange={this.onChange}
										selected={this.state.personInfo.date}
										name="date"
									/> */}
											<div className="row" style={{ marginTop: 20 }}>
												{" "}
												<div className="col-md-3" style={{ float: "left" }}>
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
													{this.state.errors.province && (
														<div className="alert alert-danger">
															{this.state.errors.province}
														</div>
													)}
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
												{/* <div className="col-md-3" style={{ float: "left" }}>
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
														<option>Karachi</option>
														<option>Quetta</option>
														<option>Peshawar</option>
													</select>
													{this.state.errors.city && (
														<div className="alert alert-danger">
															{this.state.errors.city}
														</div>
													)}
												</div> */}
												<div className="col-md-3" style={{ float: "left" }}>
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
										<h4 className="text-center mb-3">Contact Information</h4>
										<div style={{ marginLeft: "3%" }}>
											<div className="row">
												<div className="col-lg-6">
													<label
														htmlFor="c_name"
														style={{ fontWeight: "bold" }}
													>
														{" "}
														Full Name
													</label>
													<input
														name="contactName"
														value={this.state.personInfo.contactName}
														onChange={this.handleChange}
														type="name"
														className="form-control"
														id="c_name"
														placeholder="Full Name"
													></input>
													{this.state.errors.contactName && (
														<div className="alert alert-danger">
															"Name should be minimum 3 and maximim 25
															alphabets"
														</div>
													)}
												</div>

												<div className="col-lg-6">
													<label
														htmlFor="c_Contact"
														style={{ fontWeight: "bold" }}
													>
														Contact Number
													</label>

													<input
														name="contactNumber"
														value={this.state.personInfo.contactNumber}
														onChange={this.handleChange}
														type="contact"
														className="form-control"
														id="c_Contact"
														placeholder="03......."
													></input>
													{this.state.errors.contactNumber && (
														<div className="alert alert-danger">
															"No Spaces and Number should be equal to 11"
														</div>
													)}
												</div>
											</div>

											<label htmlFor="c_Address" style={{ fontWeight: "bold" }}>
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
								</div>

								<button
									style={{ marginLeft: "3%" }}
									type="submit"
									className="btn btn-primary"
									// disabled={this.validate()}
								>
									Update
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

export default EditMobileForm;
