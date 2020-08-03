import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const TypeGroup = (props) => {
	const { items, onItemSelect, selectedItem } = props;
	return (
		<Dropdown>
			<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
				Type
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{items.map((item) => (
					<Dropdown.Item
						onClick={() => onItemSelect(item)}
						key={item._id}
						href="#/action-1"
						className={item === selectedItem ? "active btn-success-inline" : ""}
					>
						{item.name}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default TypeGroup;
