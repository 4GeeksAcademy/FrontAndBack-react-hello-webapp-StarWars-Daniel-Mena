import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicle = (props) => {

	const url = `/details/vehicles/${props.id}`

	const [bgButton, setBgButton] = useState(false);
	const [bgIcon, setBgIcon] = useState(false)

	const buttonOver = () =>{
		setBgButton(true)
	}

	const buttonOut = () =>{
		setBgButton(false)
	}

	const iconOver = () =>{
		setBgIcon(true)
	}

	const iconOut = () =>{
		setBgIcon(false)
	}
	
	return (
		<div className="card" style={{width: "18rem"}}>
			<img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="Vehicle img"/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text"></p>
				<div className="d-flex justify-content-between">
					<Link to={url}>
						<button type="button" className={`btn ${bgButton==false ? "btn-outline-primary" : "btn-primary"}`} onMouseOver={buttonOver} onMouseOut={buttonOut}>
							Learn More!
						</button>
					</Link>
					<i className={`fa fa-2x fa-heart mt-1 me-1 ${bgIcon==false ? "text-primary": "text-warning"}`} onMouseOver={iconOver} onMouseOut={iconOut}></i>
				</div>
			</div>
		</div>
	);
};

Vehicle.propTypes = { 
	key: PropTypes.string,
	name: PropTypes.string
}