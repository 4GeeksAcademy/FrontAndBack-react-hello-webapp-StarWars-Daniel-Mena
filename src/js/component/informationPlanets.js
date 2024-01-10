import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const InformationPlanets = (props) => {
	return (
		<div className="m-auto col-12 d-flex flex-column">
			<div className="d-flex flex-row gap-3">
				<img src="https://vasavihospitals.com/public/uploads/images/632ae685ed739.gif" className="col-6" alt="Character img"/>
				<div className="col-6">
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="text-danger d-flex flex-row justify-content-between mt-3 border-top border-danger pt-2">
				<div className="d-flex flex-column align-items-center">
					<p>Climate</p>
					<p>{props.climate}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Diameter</p>
					<p>{props.diameter}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Gravity</p>
					<p>{props.gravity}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Terrain</p>
					<p>{props.terrain}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Orbital Period</p>
					<p>{props.orbital_period}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Rotation Period</p>
					<p>{props.rotation_period}</p>
				</div>			
			</div>
		</div>
	);
};

InformationPlanets.propTypes = { 
	name: PropTypes.string,
	description: PropTypes.string,
	climate: PropTypes.string,
	diameter: PropTypes.string,
	gravity: PropTypes.string,
	terrain: PropTypes.string,
	orbital_period: PropTypes.string,
	rotation_period: PropTypes.string
}







