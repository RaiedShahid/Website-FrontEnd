import React, { Component } from "react";
// import Navbar from "./navbar";
import Poster from "./poster";
import Newsfeed from "./newsFeed";
import Catalog from "./catalog";
import Footer from "./footer";

class Home extends Component {
	// showClick = info => {
	// 	console.log(info);
	// 	console.log("Home tag");
	// };
	render() {
		const { user } = this.props;

		return (
			<div className="Scrolling">
				<Poster />
				<Newsfeed />
				<Catalog user={user} />
				<Footer></Footer>
			</div>
		);
	}
}

export default Home;
