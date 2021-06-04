import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className="collection-item">
			<div className="image"
				style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="name">{price}</span>
			</div>
			<CustomButton inverted> ADD to cart </CustomButton>
		</div>
	);
};

export default CollectionItem;
