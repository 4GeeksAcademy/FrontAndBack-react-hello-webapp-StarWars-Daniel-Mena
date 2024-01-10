import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planet = (props) => {

	const url = `/details/planets/${props.id}`	

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
			<img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="Planet img"/>
			<div className="card-body">
				<h5 className="card-title mb-5">{props.name}</h5>
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

Planet.propTypes = { 
	key: PropTypes.string,
	name: PropTypes.string
}