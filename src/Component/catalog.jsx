import React, { Component } from "react";
import NewFiltration from "./newFiltraion";
// import Cards from "./cards";
import GenericCard from "./genericCard";
import ListGroup from "./listGroup";
import { getGenres } from "../DataBase/fakeGenre";
import axios from "axios";
import Pagination from "./Pagination";
import { paginateDate } from "./../utils/paginateData";
import Searchbox from "./searchBox";
import TypeGroup from "./typeGroup";

class Catalog extends Component {
	state = {
		genre: [],
		type: [
			{ _id: "", name: "ALL" },
			{ _id: "2", name: "Person" },
			{ _id: "3", name: "Car" },
			{ _id: "4", name: "Bike" },
			{ _id: "5", name: "Mobile" },
			{ _id: "6", name: "Tablet" },
		],
		info: [],
		pageSize: 9,
		currentPage: 1,
		// searchQuery: "",
		// selectedGenre: null,
		// selectedType: null,
		filtration: [],
	};
	componentDidMount() {
		const genres = [{ _id: "", name: "ALL" }, ...getGenres()];
		this.setState({
			genre: genres,
		});
		// this.handleTypeSelect();
		axios
			.get("http://localhost:4000/home/")
			.then((res) => {
				const info = res.data;
				this.setState({ info });
			})
			.catch((err) => console.log("Some problem", err));
	}
	handleGenreSelect = (genre) => {
		this.setState({
			selectedGenre: genre,
			searchQuery: this.state.searchQuery,
			currentPage: 1,
		});
		console.log("Genre select", this.state.selectedGenre);
	};

	handleTypeSelect = (type) => {
		this.setState({
			selectedType: type,
			searchQuery: this.state.searchQuery,
			currentPage: 1,
		});
		console.log("Type select ", this.state.selectedType);
	};
	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handelSearch = (query) => {
		this.setState({
			searchQuery: query,
			selectedGenre: this.state.selectedGenre,
			currentPage: 1,
		});
	};

	showClick = (newInfo) => {
		const myinfo = "ali baba";
		this.setState({ showInfo: myinfo });
		this.setState({ temp: 1 });
	};

	getPagedData = () => {
		const {
			pageSize,
			currentPage,
			selectedGenre,
			selectedType,
			searchQuery,
			info,
		} = this.state;

		const filtration = this.state.filtration;
		const age = filtration.age;
		//age.split("");

		let filtered = info;

		if (selectedGenre && selectedGenre._id) {
			filtered = info.filter((m) => m.category === selectedGenre.name);
		}
		if (selectedType && selectedType._id) {
			if (selectedGenre && selectedGenre._id) {
				if (selectedType.name === "Person") {
					filtered = filtered.filter((m) => m.age);
					console.log("Person");
					console.log(filtered);
				} else filtered = filtered.filter((m) => m.type === selectedType.name);
			} else {
				if (selectedType.name === "Person") {
					filtered = info.filter((m) => m.age);
					console.log("Person");
					console.log(filtered);
				} else filtered = info.filter((m) => m.type === selectedType.name);
				console.log(filtered);
			}
		}
		if (searchQuery)
			filtered = filtered.filter((m) =>
				m.name != null
					? m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
					: m.mobilename != null
					? m.mobilename.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
					  m.ime.toLowerCase().startsWith(searchQuery.toLowerCase())
					: m.carname != null
					? m.carname.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
					  m.platenumber.toLowerCase().startsWith(searchQuery.toLowerCase())
					: null
			);

		if (filtration) {
			if (filtration.province) {
				filtered = filtered.filter((m) => m.province === filtration.province);
			}
			if (filtration.company) {
				filtered = filtered.filter((m) => m.company === filtration.company);
			}
			if (filtration.color) {
				filtered = filtered.filter((m) => m.color === filtration.color);
			}
			if (filtration.city) {
				filtered = filtered.filter((m) => m.city === filtration.city);
			}
			if (filtration.year) {
				filtered = filtered.filter((m) => m.year === filtration.year);
			}
			if (filtration.month) {
				let month = filtration.month + "";
				month = month.substring(0, 3);
				filtered = filtered.filter((m) => m.month === month);
			}
			if (filtration.date) {
				filtered = filtered.filter((m) => m.date === filtration.date);
			}

			if (filtration.age) {
				if (filtration.age === "1-10") {
					filtered = filtered.filter((m) => m.age >= 1 && m.age <= 10);
				} else if (filtration.age === "10-20") {
					filtered = filtered.filter((m) => m.age >= 10 && m.age <= 20);
				} else if (filtration.age === "20-30") {
					filtered = filtered.filter((m) => m.age >= 20 && m.age <= 30);
				} else if (filtration.age === "30-40") {
					filtered = filtered.filter((m) => m.age >= 30 && m.age <= 40);
				} else if (filtration.age === "40-50") {
					filtered = filtered.filter((m) => m.age >= 40 && m.age <= 50);
				} else if (filtration.age === "50-60") {
					filtered = filtered.filter((m) => m.age >= 50 && m.age <= 60);
				} else if (filtration.age === "60+") {
					filtered = filtered.filter((m) => m.age >= 60);
				}
			}
		}

		const data = paginateDate(filtered, currentPage, pageSize);

		return { totalCount: filtered.length, data: data };
	};

	handleFiltration = (e) => {
		console.log("Catalog", e);
		window.scrollTo(0, 0);
		this.setState({ filtration: e });
	};
	render() {
		this.showClick = this.showClick.bind(this);
		const { totalCount, data } = this.getPagedData();
		const { user } = this.props;

		return (
			<React.Fragment>
				{/* <Navbar user={user} /> */}
				<div
					className="container  "
					style={{
						marginLeft: "30%",
						marginBottom: "2%",
						background: "",
					}}
				>
					<div className="row">
						<div className="col-md-6 col-7  ">
							<Searchbox
								value={this.state.searchQuery}
								onChange={this.handelSearch}
							/>
						</div>

						<div className="col-sm-1 " style={{ marginTop: "1.5%" }}>
							<TypeGroup
								items={this.state.type}
								onItemSelect={this.handleTypeSelect}
								selectedItem={this.state.selectedType}
							/>
						</div>
						<div className="col-sm-2  " style={{ marginTop: "1.5%" }}>
							<ListGroup
								items={this.state.genre}
								onItemSelect={this.handleGenreSelect}
								selectedItem={this.state.selectedGenre}
								style={{}}
							/>
						</div>
					</div>
				</div>

				<div className=" row">
					<div
						className="col-6 col-sm-6 col-md-3 text-white"
						style={{
							marginLeft: "",
							float: "left",
							height: "100%",
							// opacity: "0.8"
						}}
					>
						<NewFiltration filtraion={this.handleFiltration}></NewFiltration>
					</div>
					<div
						className="col-6 col-md-9  "
						style={{
							alignItems: "center",
							alignContent: "center",
						}}
					>
						<GenericCard info={data} onShowClick={this.showClick} />
						<div style={{ textAlign: "center" }}>
							{" "}
							{data.length === 0 ? (
								<h5 style={{ fontSize: 30 }}> No Record Found</h5>
							) : null}
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<Pagination
						count={totalCount}
						pageSize={this.state.pageSize}
						onPageChange={this.handlePageChange}
						currentPage={this.state.currentPage}
					/>
				</div>
			</React.Fragment>
		);
	}
}
export default Catalog;
