import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import prsn2 from "../images/person.png";
import ProfileGenericCard from "./profileGenericCard";

import ProfileSideMenu from "./profileSideMenu";

class Profile extends Component {
	state = {
		info: [],
		username: [],
	};

	async componentDidMount() {
		const result = await axios
			.get(`http://localhost:4000/home/profile/${this.props.match.params.id}`)
			.then((res) => {
				const info = res.data;
				this.setState({ info });

				return info;
			})
			.catch((err) => console.log("Some problem", err));

		// console.log("profile Result", this.state.info[0].personImage);
	}

	render() {
		const { user } = this.props;
		// const name = user.name;
		// console.log("user", user);
		//	console.log(this.state.info);
		const info = this.state.info;

		console.log("Count", info.length);
		return (
			<React.Fragment>
				<div className="row">
					<div
						className="col-6  col-sm-5 col-md-4 col-lg-3"
						style={{
							backgroundColor: "#145555",
							// marginLeft: "2%",
							height: "100%",
							// width: "20%",
							float: "left",
						}}
					>
						{" "}
						<ProfileSideMenu length={info.length} />
					</div>
					<div className="col-lg-9 col-md-8 col-sm-7 col-6 ">
						<ProfileGenericCard user={user} info={this.state.info} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Profile;
