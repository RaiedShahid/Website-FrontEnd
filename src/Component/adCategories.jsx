import React, { Component } from "react";
import vh from "../images/vehicle.png";
import mobile from "../images/mobile.jpg";
import pr from "../images/perosnad.png";
import { Link } from "react-router-dom";

class AdCategories extends Component {
	state = {};
	render() {
		console.log("props", this.props.match.params.type);

		return (
			<React.Fragment>
				<div className="text-center mt-5">
					<h1>Select Category </h1>
				</div>
				<div className="mt-5 container text-center align-item-center mx-auto  ">
					<div style={{ marginLeft: "10%", backgroundColor: "green" }}>
						<Link
							to={
								this.props.match.params.type === "Lost"
									? "/lostform"
									: "/foundform"
							}
						>
							<div className="card cardj col-12 col-md-6 col-lg-3 col-xl-3 mr-5 float-left  ">
								<img className="card-img-top" src={pr} alt="" />

								<div className="card-body ">
									<h3 className="card-title" style={{ color: "gray" }}>
										{" "}
										Person
									</h3>
								</div>
							</div>
						</Link>
					</div>
					<Link
						to={
							this.props.match.params.type === "Lost"
								? "/vehicleLostForm"
								: "/vehicleFoundForm"
						}
					>
						<div className="bg-success">
							<div className="card cardj col-12 col-md-6 col-lg-3 col-xl-3 mr-5 float-left ">
								<img className="card-img-top" src={vh} alt="" />

								<div className="card-body">
									<h3 className="card-title " style={{ color: "grey" }}>
										{" "}
										Vehicle
									</h3>
								</div>
							</div>
						</div>
					</Link>

					<Link
						to={
							this.props.match.params.type === "Lost"
								? "/mobLostForm"
								: "/mobFoundForm"
						}
					>
						<div className="card cardj col-12 col-md-6 col-lg-3 col-xl-3 ">
							<img className="card-img-top" src={mobile} alt="" />

							<div className="card-body">
								<h3 className="card-title" style={{ color: "gray" }}>
									Mobile/Tablet
								</h3>
							</div>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}

export default AdCategories;
