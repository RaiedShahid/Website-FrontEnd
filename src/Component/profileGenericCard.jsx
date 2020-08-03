import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import prsn from "../images/person.png";

class ProfileGenericCard extends Component {
	handleDelete = (id) => {
		console.log(id);

		axios
			.delete(`http://localhost:4000/home/${id}`)
			.then((res) => {
				const info = res.data;
			})
			.catch((err) => console.log("Some problem", err));

		window.location = `/profile/${this.props.user._id}`;
	};

	handleEdit = (id) => {
		console.log(id);
	};
	render() {
		//	console.log(user);
		//	console.log(this.state.info);
		// const { user } = this.props;
		const { info } = this.props;
		console.log("info", info);
		return info.map((each) => (
			<div
				className="card bg-purple  "
				key={each._id}
				style={{
					//width: "50%",
					width: "240px",
					float: "left",
					marginLeft: "1%",
					//	marginRight: "1%",
					marginBottom: "2%",
					backgroundColor: "#145555",
				}}
			>
				<div className="card-body">
					<Link to={`/home/${each._id}/${each.name}/${each.category} `}>
						<div
							className="card  "
							style={{
								//width: "50%",
								width: "200px",
								//float: "left",
								marginLeft: "0",
								// marginRight: "1%",
								marginBottom: "2%",
							}}
						>
							<img
								className="card-img-top"
								// src={`http://localhost:4000/home/${each.personImage}`}
								src={"data:image/png;base64," + each.personImage}
								alt="Card image"
								style={{ width: "100%" }}
							/>
							<div className="card-body" style={{ color: "black" }}>
								<b className="card-title">
									{each.name && String(each.name).length > 16
										? String(each.name).substring(0, 15) + "..."
										: each.name}
									{each.mobilename && String(each.mobilename).length > 16
										? String(each.mobilename).substring(0, 15) + "..."
										: each.mobilename}
									{each.carname && String(each.carname).length > 16
										? String(each.carname).substring(0, 15) + "..."
										: each.carname}
								</b>

								<div className="card-text mt-3">
									{each.age && (
										<p>
											{" "}
											Age :<b> {each.age}</b>
										</p>
									)}
									{each.ime && (
										<p>
											{" "}
											IME :<b> {String(each.ime).substring(0, 10) + "..."}</b>
										</p>
									)}
									{each.platenumber && (
										<p>
											{" "}
											Plate :
											<b>
												{" "}
												{String(each.platenumber).length < 11
													? String(each.platenumber)
													: String(each.platenumber).substring(0, 10) + "..."}
											</b>
										</p>
									)}
									<h4
										className={
											each.category === "Lost"
												? " btn btn-danger btn-sm disabled "
												: "btn btn-success btn-sm disabled "
										}
										style={{
											cursor: "auto",
											background: "",
											color: "white",
											float: "right",
										}}
									>
										{each.category}
									</h4>
								</div>
								<div className="mt-3">
									City :
									<b>
										{" "}
										{each.category == "Lost"
											? String(each.city).length < 8
												? each.city
												: String(each.city).substring(0, 6) + "..."
											: each.category == "Found"
											? String(each.city).length < 7
												? each.city
												: String(each.city).substring(0, 5) + "..."
											: null}
									</b>
								</div>
								{/* <p className="card-text">
								City :<b> {each.city}</b>{" "}
							</p> */}
							</div>
						</div>
					</Link>

					<div className="row">
						<div className="col-2"></div>
						<div className="col-4">
							<button
								onClick={() => this.handleDelete(each._id)}
								className="btn btn-warning"
							>
								Delete
							</button>
						</div>
						<div className="col-3">
							<Link
								className="btn btn-info"
								to={
									each.name != null
										? `/profile/edit/${each._id} `
										: each.mobilename != null
										? `/profile/mobileeditform/${each._id}/${each.postingUser} `
										: `/profile/vehicleeditform/${each._id} `
								}
								onClick={() => this.handleEdit(each._id)}
							>
								Edit
							</Link>
						</div>
					</div>
				</div>
			</div>
		));
	}
}

export default ProfileGenericCard;
