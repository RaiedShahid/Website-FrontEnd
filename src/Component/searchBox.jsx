import React from "react";

const Searchbox = ({ value, onChange }) => {
	return (
		<input
			type="text"
			name="query"
			className="form-control my-3 "
			placeholder="Search by Name, Ime or Plate Number"
			value={value}
			onChange={(e) => onChange(e.currentTarget.value)}
		/>
	);
};

export default Searchbox;
