import React, { Component } from "react";
import prsn from "../images/person.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { getInfo } from "./../DataBase/fakeDataBase";

class GenericCard extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	getImage: this.props
		// };
	}

	// componentDidMount() {
	// 	console.log("personImage via state", this.state.getImage);

	// 	console.log("personImage via props", this.props.info);

	// 	axios
	// 		.get(`http://localhost:4000/home/uploads/15849015014621.jpeg`, {
	// 			responseType: "arraybuffer"
	// 		})
	// 		.then(response => {
	// 			let image = btoa(
	// 				new Uint8Array(response.data).reduce(
	// 					(data, byte) => data + String.fromCharCode(byte),
	// 					""
	// 				)
	// 			);
	// 			const getImage = `data:${response.headers[
	// 				"content-type"
	// 			].toLowerCase()};base64,${image}`;
	// 			this.setState({ getImage });
	// 		})
	// 		.catch(err => console.log("Some problem", err));
	// }

	render() {
		let { info, onShowClick } = this.props;

		// console.log(info);
		return info.map((each) => (
			<Link
				to={`/home/${each._id}/${each.name}/${each.category} `}
				key={each._id}
			>
				<div
					key={each._id}
					className="card cardj col-12 col-md-6 col-lg-3 col-xl-4 "
					style={{
						//width: "50%",
						width: "19rem",
						float: "left",
						marginLeft: "1%",
						//marginRight: "1%",
						color: "black",
						marginBottom: "2%",
					}}
				>
					<img
						className="card-img-top"
						// src={`http://localhost:4000/home/${each.personImage}`}
						src={"data:image/png;base64," + each.personImage}
						alt="card"
						style={{ width: "100%" }}
					/>
					<div className="card-body">
						<h5 className="card-title">
							{each.name && String(each.name).length > 22
								? String(each.name).substring(0, 20) + "..."
								: each.name}
							{each.mobilename && String(each.mobilename).length > 22
								? String(each.mobilename).substring(0, 20) + "..."
								: each.mobilename}
							{each.carname && String(each.carname).length > 22
								? String(each.carname).substring(0, 20) + "..."
								: each.carname}
						</h5>
						<h4
							className={
								each.category === "Lost"
									? " btn btn-danger btn-sm disabled "
									: "btn btn-success btn-sm disabled "
							}
							style={{
								cursor: "auto",
								background: "",
								// color: "white",
								float: "right",
							}}
						>
							{each.category}
						</h4>
						{each.age && (
							<p className="card-text">
								Age :<b> {each.age}</b>{" "}
							</p>
						)}
						{each.ime && (
							<p className="card-text">
								IME :
								<b>
									{" "}
									{each.category == "Lost"
										? String(each.ime).substring(0, 15)
										: String(each.ime).substring(0, 13) + "..."}
								</b>
							</p>
						)}
						{each.platenumber && (
							<p className="card-text">
								Plate :
								<b>
									{" "}
									{String(each.platenumber).length < 13
										? String(each.platenumber)
										: String(each.platenumber).substring(0, 11) + "..."}
								</b>{" "}
							</p>
						)}
						<p className="card-text">
							City :<b> {each.city}</b>{" "}
						</p>

						{/* <Link
							onClick={() => onShowClick(each)}
							to={`/home/${each._id}/${each.name}/${each.category}/${each.personImage} `}
							className="btn btn-success"
						>
							Show
						</Link> */}
					</div>
				</div>
			</Link>
		));
	}
}

export default GenericCard;
