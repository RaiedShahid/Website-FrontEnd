import React, { Component } from "react";

class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="conatiner">
				<div style={{ textAlign: "center", marginTop: "4%" }}>
					<h2 style={{ fontSize: 50 }}> Contact Us</h2>
				</div>
				<div
					style={{
						textAlign: "center",
						marginTop: "4%",
						marginLeft: "10%",
						marginRight: "10%",
					}}
				>
					<p style={{ fontSize: 20, color: "black" }}>
						If you have any queries or if you want to give some advises you can
						email us. Our phone numbers are also provided so you can also
						whatsapp us. We will try our best to answer your queries as soon as
						possible and we will also consider your suggestions.
					</p>
				</div>

				<div className="row mt-4 ">
					<div className="col-3"></div>
					<div
						className=" col-3 "
						style={{
							alignContent: "center",
							textAlign: "center",
						}}
					>
						<div
							className="card "
							style={{
								borderBottomLeftRadius: 10,
								borderBottomRightRadius: 10,
								borderColor: "black",
							}}
						>
							<div className="card-body  bg-dark " style={{ color: "white" }}>
								<h4>Email</h4>
							</div>
							<div>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
										fontSize: 17,
									}}
								>
									Furqanarshad98.fa@gmail.com
								</p>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
										fontSize: 17,
									}}
								>
									Mustafaakram001@gmail.com
								</p>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
										fontSize: 17,
									}}
								>
									Raiedshahid3@gmail.com
								</p>
							</div>
						</div>
					</div>

					<div
						className=" col-3"
						style={{
							alignItems: "center",
							textAlign: "center",
							alignContent: "center",
							justifyContent: "center",
						}}
					>
						<div
							className="card"
							style={{
								borderBottomLeftRadius: 10,
								borderBottomRightRadius: 10,
								borderColor: "grey",
							}}
						>
							<div className="card-body bg-info " style={{ color: "white" }}>
								<h4>Contact</h4>
							</div>
							<div>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
										fontSize: 17,
									}}
								>
									+92310-7786541
								</p>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
										fontSize: 17,
									}}
								>
									+92331-6483841
								</p>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
										fontSize: 17,
									}}
								>
									+92310-7786541
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
