import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ListGroup = props => {
	const { items, onItemSelect, selectedItem } = props;
	return (
		<Dropdown>
			<Dropdown.Toggle variant="outline-success" id="dropdown-basic">
				Category
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{items.map(item => (
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

export default ListGroup;
