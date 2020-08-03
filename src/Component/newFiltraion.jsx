import React, { Component } from "react";

class NewFiltration extends Component {
	// state = {
	// 	personInfo: {
	// 		// month: "",
	// 		// date: "",
	// 		// year: "",
	// 		// province: "",
	// 		// city: "",
	// 		// area: "",
	// 		// age: ""
	// 	}
	// };
	constructor(props) {
		super(props);
		this.state = {
			personInfo: {
				month: "",
				date: "",
				year: "",
				province: "",
				city: "",
				type: "ALL",
				age: "",
				color: "",
				company: "",
			},
		};

		this.baseState = this.state;
	}

	handleChange = (e) => {
		const personInfo = { ...this.state.personInfo };

		personInfo[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ personInfo });
	};

	handleSearch = () => {
		console.log("Filtration", this.state.personInfo);
		const personInfo = this.state.personInfo;
		if (personInfo.month === "_ _ _") {
			personInfo.month = "";
			console.log("abc");
			this.setState({ personInfo });
		}
		if (personInfo.date == "_ _") {
			personInfo.date = "";
			this.setState({ personInfo });
		}
		if (personInfo.year == "_ _") {
			personInfo.year = "";
			this.setState({ personInfo });
		}
		if (personInfo.province == "_ _ _") {
			personInfo.province = "";
			this.setState({ personInfo });
		}
		if (personInfo.color == "_ _ _") {
			personInfo.color = "";
			this.setState({ personInfo });
		}
		if (personInfo.company == "_ _ _") {
			personInfo.company = "";
			this.setState({ personInfo });
		}
		if (personInfo.age == "_ _") {
			personInfo.age = "";
			this.setState({ personInfo });
		}
		if (personInfo.city == "_ _") {
			personInfo.city = "";
			this.setState({ personInfo });
		}

		console.log("State", this.state.personInfo);

		this.props.filtraion(this.state.personInfo);
		//return this.state.personInfo;
	};
	handleReset = () => {
		const personInfo = { ...this.state.personInfo };
		personInfo.month = "_ _ _";
		personInfo.date = "_ _";
		personInfo.year = "_ _";
		personInfo.province = "_ _ _";
		personInfo.company = "_ _ _";
		personInfo.color = "_ _ _";
		personInfo.city = "_ _";
		personInfo.age = "_ _";
		this.setState({ personInfo });
	};
	render() {
		return (
			<React.Fragment>
				<div className=" bg-success ">
					<div className="bg-dark text-white" style={{ marginBottom: "0" }}>
						<h4 className=" fas fa-filter  p-3 mt-2"> Filtration</h4>
						<select
							className="bg-dark "
							style={{ color: "white" }}
							name="type"
							value={this.state.personInfo.type}
							onChange={this.handleChange}
						>
							{" "}
							<option>ALL</option>
							<option>Person</option>
							<option>Vehicle</option>
							<option>Mobile</option>
						</select>
					</div>
					<div
						className="pl-4  bg-success"
						style={{ background: "", marginLeft: "0" }}
					>
						<h5 className="" style={{ color: "#000" }}>
							Date
						</h5>

						<div className="row" style={{ marginTop: 20 }}>
							<div className="col-8 col-md-6">
								<label style={{ fontWeight: "bold" }}>Month</label>
								<select
									className="form-control"
									id="l_province"
									name="month"
									value={this.state.personInfo.month}
									onChange={this.handleChange}
									placeholder="Month"
								>
									<option>_ _ _</option>
									<option>January</option>
									<option>Feburary</option>
									<option>March</option>
									<option>April</option>
									<option>May</option>
									<option>June</option>
									<option>July</option>
									<option>August</option>
									<option>September</option>
									<option>October</option>
									<option>November</option>
									<option>December</option>
								</select>
							</div>

							<div className="col-5 col-md-4" style={{}}>
								<label style={{ fontWeight: "bold" }}>Date</label>
								<select
									className="form-control"
									id="l_city"
									name="date"
									value={this.state.personInfo.date}
									onChange={this.handleChange}
								>
									<option>_ _</option>
									<option>01</option>
									<option>02</option>
									<option>03</option>
									<option>04</option>
									<option>05</option>
									<option>06</option>
									<option>07</option>
									<option>08</option>
									<option>09</option>
									<option>10</option>
									<option>11</option>
									<option>12</option>
									<option>13</option>
									<option>14</option>
									<option>15</option>
									<option>16</option>
									<option>17</option>
									<option>18</option>
									<option>19</option>
									<option>20</option>
									<option>21</option>
									<option>22</option>
									<option>23</option>
									<option>24</option>
									<option>25</option>
									<option>26</option>
									<option>27</option>
									<option>28</option>
									<option>29</option>
									<option>30</option>
									<option>31</option>
								</select>
							</div>

							<div className="col-md-5 col-5" style={{}}>
								<label style={{ fontWeight: "bold" }}>Year</label>
								<select
									className="form-control"
									id="l_area"
									name="year"
									value={this.state.personInfo.year}
									onChange={this.handleChange}
								>
									<option>_ _</option>
									<option value="2020">2020</option>
									<option value="2019">2019</option>
									<option value="2018">2018</option>
									<option value="2017">2017</option>
									<option value="2016">2016</option>
									<option value="2015">2015</option>
									<option value="2014">2014</option>
									<option value="2013">2013</option>
									<option value="2012">2012</option>
									<option value="2011">2011</option>
									<option value="2010">2010</option>
									<option value="2009">2009</option>
									<option value="2008">2008</option>
									<option value="2007">2007</option>
									<option value="2006">2006</option>
									<option value="2005">2005</option>
									<option value="2004">2004</option>
									<option value="2003">2003</option>
									<option value="2002">2002</option>
									<option value="2001">2001</option>
									<option value="2000">2000</option>
									<option value="1999">1999</option>
									<option value="1998">1998</option>
									<option value="1997">1997</option>
									<option value="1996">1996</option>
									<option value="1995">1995</option>
									<option value="1994">1994</option>
									<option value="1993">1993</option>
									<option value="1992">1992</option>
									<option value="1991">1991</option>
									<option value="1990">1990</option>
									<option value="1989">1989</option>
									<option value="1988">1988</option>
									<option value="1987">1987</option>
									<option value="1986">1986</option>
									<option value="1985">1985</option>
									<option value="1984">1984</option>
									<option value="1983">1983</option>
									<option value="1982">1982</option>
									<option value="1981">1981</option>
									<option value="1980">1980</option>
									<option value="1979">1979</option>
									<option value="1978">1978</option>
									<option value="1977">1977</option>
									<option value="1976">1976</option>
									<option value="1975">1975</option>
									<option value="1974">1974</option>
									<option value="1973">1973</option>
									<option value="1972">1972</option>
									<option value="1971">1971</option>
									<option value="1970">1970</option>
									<option value="1969">1969</option>
									<option value="1968">1968</option>
									<option value="1967">1967</option>
									<option value="1966">1966</option>
									<option value="1965">1965</option>
									<option value="1964">1964</option>
									<option value="1963">1963</option>
									<option value="1962">1962</option>
									<option value="1961">1961</option>
									<option value="1960">1960</option>
									<option value="1959">1959</option>
									<option value="1958">1958</option>
									<option value="1957">1957</option>
									<option value="1956">1956</option>
									<option value="1955">1955</option>
									<option value="1954">1954</option>
									<option value="1953">1953</option>
									<option value="1952">1952</option>
									<option value="1951">1951</option>
									<option value="1950">1950</option>
									<option value="1949">1949</option>
									<option value="1948">1948</option>
									<option value="1947">1947</option>
									<option value="1946">1946</option>
									<option value="1945">1945</option>
									<option value="1944">1944</option>
									<option value="1943">1943</option>
									<option value="1942">1942</option>
									<option value="1941">1941</option>
									<option value="1940">1940</option>
									<option value="1939">1939</option>
									<option value="1938">1938</option>
									<option value="1937">1937</option>
									<option value="1936">1936</option>
									<option value="1935">1935</option>
									<option value="1934">1934</option>
									<option value="1933">1933</option>
									<option value="1932">1932</option>
									<option value="1931">1931</option>
									<option value="1930">1930</option>
									<option value="1929">1929</option>
									<option value="1928">1928</option>
									<option value="1927">1927</option>
									<option value="1926">1926</option>
									<option value="1925">1925</option>
									<option value="1924">1924</option>
									<option value="1923">1923</option>
									<option value="1922">1922</option>
									<option value="1921">1921</option>
									<option value="1920">1920</option>
									<option value="1919">1919</option>
									<option value="1918">1918</option>
									<option value="1917">1917</option>
									<option value="1916">1916</option>
									<option value="1915">1915</option>
									<option value="1914">1914</option>
									<option value="1913">1913</option>
									<option value="1912">1912</option>
									<option value="1911">1911</option>
									<option value="1910">1910</option>
									<option value="1909">1909</option>
									<option value="1908">1908</option>
									<option value="1907">1907</option>
									<option value="1906">1906</option>
									<option value="1905">1905</option>
								</select>
							</div>
						</div>

						<hr />
						<h5 style={{ color: "#000" }}>Area</h5>
						{this.state.personInfo.type === "ALL" ? (
							<div className="row " style={{ height: 0 }}>
								<div className="col-8 col-md-6" style={{ float: "left" }}>
									<label style={{ fontWeight: "bold" }}>Province</label>
									<select
										className="form-control"
										id="l_province"
										name="province"
										value={this.state.personInfo.province}
										onChange={this.handleChange}
									>
										<option>_ _ _</option>
										<option>Punjab</option>
										<option>Sindth</option>
										<option>Balochistan</option>
										<option>Khyber Pakhtunkhwa</option>
									</select>
								</div>

								{this.state.personInfo.province === "Punjab" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Lahore</option>
											<option>Faisalabad</option>
											<option>Multan</option>
											<option>Rawalpindi</option>
										</select>
									</div>
								) : null}

								{this.state.personInfo.province === "Sindth" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Karachi</option>
											<option>Hyderabad</option>
											<option>Sukkhur</option>
										</select>
									</div>
								) : null}

								{this.state.personInfo.province === "Balochistan" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Quetta</option>
											<option>Gwadar</option>
											<option>Sibbi</option>
											<option>Turbat</option>
										</select>
									</div>
								) : null}

								{this.state.personInfo.province === "Khyber Pakhtunkhwa" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Peshawar</option>
											<option>Abbottabad</option>
											<option>Mardan</option>
											<option>Bannu</option>
										</select>
									</div>
								) : null}
							</div>
						) : (
							<div className="row ">
								<div className="col-8 col-md-6" style={{ float: "left" }}>
									<label style={{ fontWeight: "bold" }}>Province</label>
									<select
										className="form-control"
										id="l_province"
										name="province"
										value={this.state.personInfo.province}
										onChange={this.handleChange}
									>
										<option>_ _ _</option>
										<option>Punjab</option>
										<option>Sindth</option>
										<option>Balochistan</option>
										<option>Khyber Pakhtunkhwa</option>
									</select>
								</div>
								{this.state.personInfo.province === "Punjab" ? (
									<div>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Lahore</option>
											<option>Faisalabad</option>
											<option>Multan</option>
											<option>Rawalpindi</option>
										</select>
									</div>
								) : null}

								{this.state.personInfo.province === "Sindth" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Karachi</option>
											<option>Hyderabad</option>
											<option>Sukkhur</option>
										</select>
									</div>
								) : null}

								{this.state.personInfo.province === "Balochistan" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Quetta</option>
											<option>Gwadar</option>
											<option>Sibbi</option>
											<option>Turbat</option>
										</select>
									</div>
								) : null}

								{this.state.personInfo.province === "Khyber Pakhtunkhwa" ? (
									<div
									// style={{ float: "left" }}
									>
										<label htmlFor="l_city" style={{ fontWeight: "bold" }}>
											City
										</label>
										<select
											name="city"
											value={this.state.personInfo.city}
											onChange={this.handleChange}
											className="form-control"
											id="l_city"
										>
											<option>_ _</option>
											<option>Peshawar</option>
											<option>Abbottabad</option>
											<option>Mardan</option>
											<option>Bannu</option>
										</select>
									</div>
								) : null}
							</div>
						)}

						{this.state.personInfo.type == "Person" && (
							<React.Fragment>
								<hr />
								<h5 style={{ color: "#000" }}>Person</h5>

								<div
									className="row"
									style={{ height: 0, margin: 0, padding: 0, marginBottom: 0 }}
								>
									<div
										className="col-6"
										style={{
											height: 0,
											margin: 0,
											padding: 0,
											marginBottom: 0,
											float: "left",
										}}
									>
										<label style={{ fontWeight: "bold" }}>Age Group</label>
										<select
											className="form-control"
											id="l_province"
											name="age"
											value={this.state.personInfo.age}
											onChange={this.handleChange}
										>
											<option>_ _</option>
											<option>1-10</option>
											<option>10-20</option>
											<option>20-30</option>
											<option>30-40</option>
											<option>40-50</option>
											<option>50-60</option>
											<option>60+</option>
										</select>
									</div>
								</div>
							</React.Fragment>
						)}
						{this.state.personInfo.type == "Vehicle" && (
							<React.Fragment>
								<hr />
								<h5 style={{ color: "#000" }}>Vehicle</h5>

								<div className="row  " style={{ height: 0 }}>
									<div className="col-5  ">
										<label style={{ fontWeight: "bold" }}>Company</label>
										<select
											className="form-control"
											id="l_province"
											name="company"
											value={this.state.personInfo.company}
											onChange={this.handleChange}
										>
											<option>_ _ _</option>
											<option>Honda</option>
											<option>Suzuki</option>
											<option>Toyota</option>
											<option>Kia</option>
											<option>Hyundai</option>
											<option>FAW</option>
										</select>
									</div>
									<div className="col-5">
										<label style={{ fontWeight: "bold" }}>Color</label>
										<select
											className="form-control"
											id="l_province"
											name="color"
											value={this.state.personInfo.color}
											onChange={this.handleChange}
										>
											<option>_ _ _</option>
											<option>Red</option>
											<option>Blue</option>
											<option>Orang</option>
											<option>White</option>
											<option>Pink</option>
											<option>BLack</option>
										</select>
									</div>
								</div>
							</React.Fragment>
						)}
						{this.state.personInfo.type == "Mobile" && (
							<React.Fragment>
								<hr />
								<h5 style={{ color: "#000" }}>Mobile</h5>

								<div className="row" style={{ height: 0 }}>
									<div className="col-5" style={{ float: "left" }}>
										<label style={{ fontWeight: "bold" }}>Company</label>
										<select
											className="form-control"
											id="l_province"
											name="company"
											value={this.state.personInfo.company}
											onChange={this.handleChange}
										>
											<option>_ _ _</option>
											<option>Samsung</option>
											<option>Apple</option>
											<option>Huawei</option>
											<option>Oppo</option>
											<option>Realme</option>
											<option>Redmi</option>
											<option>Infinix</option>
											<option>Tecno</option>
											<option>QMobile</option>
										</select>
									</div>
									<div className="col-5" style={{ float: "left" }}>
										<label style={{ fontWeight: "bold" }}>Color</label>
										<select
											className="form-control"
											id="l_province"
											name="color"
											value={this.state.personInfo.color}
											onChange={this.handleChange}
										>
											{" "}
											<option>_ _ _</option>
											<option>Red</option>
											<option>Blue</option>
											<option>Orang</option>
											<option>White</option>
											<option>Pink</option>
											<option>BLack</option>
										</select>
									</div>
								</div>
							</React.Fragment>
						)}
						{/* <hr /> */}
					</div>

					<div className="bg-dark p-2 py-3 " style={{ marginTop: 120 }}>
						<button
							onClick={this.handleSearch}
							type="submit"
							className="btn btn-primary "
							style={{ marginLeft: "20%" }}
						>
							Search
						</button>
						<button
							onClick={this.handleReset}
							type="submit"
							className="btn btn-secondary"
							style={{ marginLeft: "2%" }}
						>
							Reset
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default NewFiltration;
