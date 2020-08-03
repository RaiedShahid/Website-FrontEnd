import React, { Component } from "react";

class Cards extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div
					className="card col-sm-2"
					style={{
						width: "400px",
						float: "left",
						marginLeft: "5px",
						marginRight: "5px",
						marginBottom: "5px"
					}}
				>
					<img
						className="card-img-top"
						src=""
						alt="Card image"
						style={{ width: "100%" }}
					/>
					<div className="card-body">
						<h4 className="card-title">John Doe</h4>
						<p className="card-text">
							Some example text some example text. John Doe is an architect and
							engineer
						</p>
						<a href="#" className="btn btn-success">
							Show
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;
