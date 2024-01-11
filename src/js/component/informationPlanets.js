import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const InformationPlanets = (props) => {
	return (
		<div className="m-auto col-12 d-flex flex-column">
			<div className="d-flex flex-row gap-3">
				<img src="https://vasavihospitals.com/public/uploads/images/632ae685ed739.gif" className="col-6" alt="Character img"/>
				<div className="col-6 text-white">
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="text-danger d-flex flex-row justify-content-between mt-3 border-top border-danger pt-2">
				<div className="d-flex flex-column align-items-center">
					<p><strong>Climate</strong></p>
					<p><strong>{props.climate}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Diameter</strong></p>
					<p><strong>{props.diameter}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Gravity</strong></p>
					<p><strong>{props.gravity}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Terrain</strong></p>
					<p><strong>{props.terrain}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Orbital Period</strong></p>
					<p><strong>{props.orbital_period}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Rotation Period</strong></p>
					<p><strong>{props.rotation_period}</strong></p>
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







