import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = (props) => {

	const url = `/details/people/${props.id}`

	return (
		<div className="card" style={{width: "18rem"}}>
			<img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="Character img"/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text"></p>
				<Link to={url}>
					<button type="button" className="btn btn-primary" >
						Learn More!
					</button>
				</Link>
			</div>
		</div>
	);
};

Character.propTypes = { 
	key: PropTypes.string,
	name: PropTypes.string
}
