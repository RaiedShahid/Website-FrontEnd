import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import { DatePicker } from "react-datepicker";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

class ShowInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [],
			getImage: null,
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		axios
			.get(`http://localhost:4000/home/${this.props.match.params.id}`)
			.then((res) => {
				const info = res.data;

				this.setState({ info });
			})
			.catch((err) => console.log("Some problem", err));

		// axios
		// 	.get(
		// 		`http://localhost:4000/home/${this.props.match.params.folder}/${this.props.match.params.image}`,
		// 		{
		// 			responseType: "arraybuffer",
		// 		}
		// 	)
		// 	.then((response) => {
		// 		let image = btoa(
		// 			new Uint8Array(response.data).reduce(
		// 				(data, byte) => data + String.fromCharCode(byte),
		// 				""
		// 			)
		// 		);
		// 		const getImage = `data:${response.headers[
		// 			"content-type"
		// 		].toLowerCase()};base64,${image}`;
		// 		this.setState({ getImage });
		// 	})
		// 	.catch((err) => console.log("Some problem", err));
	}

	getDate = (e) => {
		var date = this.state.info.date;
		date = date.charAt(0);
		console.log(date);
	};
	render() {
		const { match } = this.props;
		console.log("image", this.props.match.params.image);

		return (
			// <body>
			<React.Fragment>
				<div className="container mt-3 col-md-8">
					<div className=" bg-success text-white py-2 ">
						{this.state.info.name != null ? (
							<h4 className="text-center ">Personal Information</h4>
						) : null}
						{this.state.info.mobilename != null ? (
							<h4 className="text-center ">Device Information</h4>
						) : null}
						{this.state.info.carname != null ? (
							<h4 className="text-center ">Vehicle Information</h4>
						) : null}
					</div>
					<div className="card ">
						<div className="card-body">
							<div className="row">
								<div className="col-lg-6">
									<div className="card mb-3">
										<div className="card-body ">
											<div className="input-group  ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														{this.state.info.name && (
															<i className="fas fa-user  ">
																<span> Name</span>
															</i>
														)}
														{this.state.info.mobilename && (
															<i className="fa fa-mobile ">
																<span> MobileName</span>
															</i>
														)}
														{this.state.info.carname && (
															<i className="fa fa-car ">
																<span> VehicleName</span>
															</i>
														)}
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.name ||
														this.state.info.mobilename ||
														this.state.info.carname}
												</h6>
											</div>
										</div>
									</div>
									<div className="card  mb-3">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													{this.state.info.age && (
														<span className="input-group-text">
															<i className="fa fa-birthday-cake  ">
																{" "}
																<span>Age</span>{" "}
															</i>
														</span>
													)}
													{!this.state.info.age && (
														<span className="input-group-text">
															<i className="fa fa-building  ">
																{" "}
																<span>Company</span>{" "}
															</i>
														</span>
													)}
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.age || this.state.info.company}{" "}
												</h6>
											</div>
										</div>
									</div>
									{this.state.info.ime && (
										<div className="card mb-3 ">
											<div className="card-body">
												<div className="input-group ">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="fa  " aria-hidden="true">
																{" "}
																IME
															</i>
														</span>
													</div>
													<h6
														className="ml-3"
														style={{ fontSize: 17, fontWeight: "bold" }}
													>
														{this.state.info.ime}{" "}
													</h6>
												</div>
											</div>
										</div>
									)}
									{this.state.info.platenumber && (
										<div className="card mb-3 ">
											<div className="card-body">
												<div className="input-group ">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="fa  " aria-hidden="true">
																{" "}
																Plate
															</i>
														</span>
													</div>
													<h6
														className="ml-3"
														style={{ fontSize: 17, fontWeight: "bold" }}
													>
														{this.state.info.platenumber}{" "}
													</h6>
												</div>
											</div>
										</div>
									)}
									{this.state.info.color && (
										<div className="card mb-3 ">
											<div className="card-body">
												<div className="input-group ">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="fa  " aria-hidden="true">
																{" "}
																Color
															</i>
														</span>
													</div>
													<h6
														className="ml-3"
														style={{ fontSize: 17, fontWeight: "bold" }}
													>
														{this.state.info.color}{" "}
													</h6>
												</div>
											</div>
										</div>
									)}
									{this.state.info.type && (
										<div className="card mb-3 ">
											<div className="card-body">
												<div className="input-group ">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="fa  " aria-hidden="true">
																Type
															</i>
														</span>
													</div>
													<h6
														className="ml-3"
														style={{ fontSize: 17, fontWeight: "bold" }}
													>
														{this.state.info.type}{" "}
													</h6>
												</div>
											</div>
										</div>
									)}
									<div className="card  ">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fa fa-tag " aria-hidden="true">
															{" "}
															Category
														</i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.category}{" "}
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									{this.state.info.personImage2 == "" ? (
										<img
											src={
												"data:image/png;base64," + this.state.info.personImage
											}
											// alt="Card image"

											style={{ objectFit: "cover" }}
											width="100%"
											height="300px"
										></img>
									) : this.state.info.personImage3 == "" ? (
										<Carousel>
											<Carousel.Item>
												<img
													src={
														"data:image/png;base64," +
														this.state.info.personImage
													}
													alt="Card image"
													style={{ objectFit: "cover" }}
													width="100%"
													height="300px"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<img
													src={
														"data:image/png;base64," +
														this.state.info.personImage2
													}
													alt="Card image"
													style={{ objectFit: "cover" }}
													width="100%"
													height="300px"
												/>
											</Carousel.Item>
										</Carousel>
									) : (
										<Carousel>
											<Carousel.Item>
												<img
													src={
														"data:image/png;base64," +
														this.state.info.personImage
													}
													alt="Card image"
													style={{ objectFit: "cover" }}
													width="100%"
													height="300px"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<img
													src={
														"data:image/png;base64," +
														this.state.info.personImage2
													}
													alt="Card image"
													style={{ objectFit: "cover" }}
													width="100%"
													height="300px"
												/>
											</Carousel.Item>
											<Carousel.Item>
												<img
													src={
														"data:image/png;base64," +
														this.state.info.personImage3
													}
													alt="Card image"
													style={{ objectFit: "cover" }}
													width="100%"
													height="300px"
												/>
											</Carousel.Item>
										</Carousel>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mt-3 col-md-8">
					<div className=" bg-success text-white py-2 ">
						<h4 className="text-center ">Details</h4>
					</div>
					<div className="card ">
						<div className="card-body">
							<div className="row">
								<div className="col-lg-6">
									<div className="card mb-3">
										<div className="card-body ">
											<div className="input-group  ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-location-arrow "> City</i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.city}
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="card  mb-3">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-map "> Province</i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.province}
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="card  mb-3">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-calendar"> Date</i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.date +
														"-" +
														this.state.info.month +
														"," +
														this.state.info.year}{" "}
												</h6>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="card  ">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-map-marker-alt"> Area</i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.area}
												</h6>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-12">
									<div className="card  ">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<b>Details</b>{" "}
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.details}
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mt-3 col-md-8">
					<div className=" bg-success text-white py-2 ">
						<h4 className="text-center ">Contact Information</h4>
					</div>
					<div className="card ">
						<div className="card-body">
							<div className="row">
								<div className="col-lg-6">
									<div className="card mb-3">
										<div className="card-body ">
											<div className="input-group  ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-user"></i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.contactName}
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="card  mb-3">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fa fa-phone"></i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.contactNumber}
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="card  mb-3">
										<div className="card-body">
											<div className="input-group ">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="fas fa-address-card"> Address</i>
													</span>
												</div>
												<h6
													className="ml-3"
													style={{ fontSize: 17, fontWeight: "bold" }}
												>
													{this.state.info.contactAddress}
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ShowInformation;
