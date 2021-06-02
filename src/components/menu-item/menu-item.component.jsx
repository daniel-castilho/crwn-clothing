import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, key, size }) => {
	return (
		<div style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            className={`${size} menu-item`}>
			<div  style={{ backgroundColor: `#fff` }} className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
