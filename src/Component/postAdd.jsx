import React, { Component } from "react";
import Navbar from "./navbar";
import fd from "../images/found.jpeg";
import lt from "../images/lost.jpeg";

import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

class PostAdd extends Component {
	render() {
		const { user } = this.props;
		return (
			<React.Fragment>
				<div className="container" style={{ marginTop: "2%" }}>
					<div className="text-center">
						<h1>
							<b> Choose Options</b>
						</h1>

						<div className="row" style={{ marginTop: "10%" }}>
							<div className="col-sm-6">
								<div className="card">
									<img
										className="card-img-top"
										style={{ width: "100%" }}
										src={lt}
										alt=""
									/>
									<div className="card-body">
										<h5 className="card-title">LostAd</h5>
										<p className="card-text">I have Lost Someone.</p>
										{user && (
											<Link to="/AdCategory/Lost" className="btn btn-success">
												LOST
											</Link>
										)}
										{!user && (
											<Link to="/login page" className="btn btn-success">
												LOST
											</Link>
										)}
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								{" "}
								<Card>
									<CardImg top width="100%" src={fd} alt="" />
									<CardBody>
										<h5 className="card-title">FoundAd</h5>

										<CardText>I have Found Someone.</CardText>
										{user && (
											<Link to="/AdCategory/Found" className="btn btn-success">
												FOUND
											</Link>
										)}
										{!user && (
											<Link to="/login page" className="btn btn-success">
												FOUND
											</Link>
										)}
									</CardBody>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default PostAdd;
