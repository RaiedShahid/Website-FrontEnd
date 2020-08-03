import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./App.css";
import Login_Page from "./Component/login page";
import Home from "./Component/home";
import Poster from "./Component/poster";
import PostAdd from "./Component/postAdd";
import Not_Found from "./Component/notFound";
import Lostform from "./Component/lostform";
import Foundform from "./Component/foundform";
import ShowInformation from "./Component/showInformation";
import LogOut from "./Component/logout";
import Navbar from "./Component/navbar";
import Profile from "./Component/profile";
import EditForm from "./Component/editForm";
import About from "./Component/about";
import Contact from "./Component/contact";
import Forget from "./Component/forgetPassword";
import AdCategories from "./Component/adCategories";
import MobFoundform from "./Component/mobFoundForm";
import MobLostform from "./Component/mobLostForm";
import EditMobileForm from "./Component/editMobileForm";
import VehicleLostform from "./Component/vehicleLostForm";
import EditVehicleForm from "./Component/editVehicleForm";
import VehicleFoundform from "./Component/vehicleFoundForm";

class App extends Component {
	state = {};
	componentDidMount() {
		try {
			const jwt = localStorage.getItem("token");
			const user = jwtDecode(jwt);
			console.log(user);
			this.setState({ user });
		} catch (ex) {}
	}
	render() {
		return (
			<div>
				<Navbar user={this.state.user} />
				<Switch>
					<Route
						path="/login page"
						render={(props) => <Login_Page user={this.state.user} {...props} />}
					></Route>
					<Route path="/logout" component={LogOut}></Route>
					<Route path="/AdCategory/:type" component={AdCategories}></Route>
					<Route path="/profile/edit/:id" component={EditForm}></Route>
					<Route
						path="/profile/mobileeditform/:id/:device"
						component={EditMobileForm}
					></Route>
					<Route
						path="/profile/vehicleeditform/:id/"
						component={EditVehicleForm}
					></Route>
					<Route
						path="/profile/:id"
						render={(props) => <Profile user={this.state.user} {...props} />}
					></Route>
					<Route
						path="/home/:id/:name/:category"
						render={(props) => <ShowInformation {...props} />}
					></Route>
					<Route path="/lostform" component={Lostform}></Route>
					<Route path="/home/login/forget" component={Forget}></Route>
					<Route path="/AboutUs" component={About}></Route>
					<Route path="/Contact" component={Contact}></Route>
					<Route path="/foundform" component={Foundform}></Route>
					<Route path="/mobFoundForm" component={MobFoundform}></Route>
					<Route path="/mobLostForm" component={MobLostform}></Route>
					<Route path="/vehicleLostForm" component={VehicleLostform}></Route>
					<Route path="/vehicleFoundForm" component={VehicleFoundform}></Route>
					<Route
						path="/postAdd"
						render={(props) => <PostAdd user={this.state.user} {...props} />}
					></Route>
					<Route
						path="/home"
						render={(props) => <Home user={this.state.user} {...props} />}
					></Route>
					<Route path="/notFound" component={Not_Found}></Route>
					<Redirect from="/" exact to="/home"></Redirect>
					<Redirect to="/notFound"></Redirect>
				</Switch>
			</div>
		);
	}
}

export default App;
