import React, { Component } from "react";

class About extends Component {
	state = {};
	render() {
		return (
			<div className="conatiner">
				<div style={{ textAlign: "center", marginTop: "4%" }}>
					<h2 style={{ fontSize: 50, color: "green" }}> About Us</h2>
				</div>
				<div
					style={{
						textAlign: "center",
						marginTop: "4%",
						marginLeft: "10%",
						marginRight: "10%",
						fontSize: 17,
					}}
				>
					<text style={{}}>
						Whenever someone finds a lost person in our country like a kid or
						someone else, people mostly take the person to a nearby Mosque where
						they make an announcement of finding a lost person so that someone
						who might know the person can come and take him. But if the person
						does not belong to the same area then this method is not very
						efficient. Thus we are providing a platform to resolve this
						situation and to make the process of finding missing people a little
						more efficient. To post an ad you have to fill in all of the
						credentials, for example when and where it was lost, if it is a
						person then enter his name, enter your name (user posting the ad)
						and the location where to return the person if found. Just like
						Lost, same categories are for Found that you will add while posting
						the ad. Your profile page will be maintained accordingly in which
						you will be able to filter the ads on the basis of its name and
						gender it it’s a person, or type and location if it’s a thing. The
						person who founds the missing person will fill the form and most of
						its credentials like his name, CNIC, location where he found it and
						the description of the thing, if it is a person then he has to enter
						the name of the lost person, his age, his gender and the location
						from where you can retrieve him. Thus the basic reason of our
						application is to make things easy for the people and to make
						something valuable for the society.
					</text>
				</div>

				<div className="row mt-4 " style={{ marginBottom: "10%" }}>
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
								borderColor: "red",
							}}
						>
							<div className="card-body  bg-danger " style={{ color: "white" }}>
								<h4>Lost</h4>
							</div>
							<div>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
									}}
								>
									If you have Lost someone then you can go to post add and
									select Lost and then enter the required info about the person
									to post your add.
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
								borderColor: "green",
							}}
						>
							<div
								className="card-body  bg-success "
								style={{ color: "white" }}
							>
								<h4>Found</h4>
							</div>
							<div>
								<p
									style={{
										marginTop: "2%",
										marginLeft: "2%",
										marginRight: "2%",
									}}
								>
									If you have found someone then you can go to post add and
									select found and then enter the required info about the person
									to post your add.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
