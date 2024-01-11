import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const InformationVehicles = (props) => {
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
					<p><strong>Model</strong></p>
					<p><strong>{props.model}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Length</strong></p>
					<p><strong>{props.length}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Manufacturer</strong></p>
					<p><strong>{props.manufacturer}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Cargo Capacity</strong></p>
					<p><strong>{props.cargo_capacity}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Crew</strong></p>
					<p><strong>{props.crew}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Max Atmosphering Speed</strong></p>
					<p><strong>{props.max_atmosphering_speed}</strong></p>
				</div>			
			</div>
		</div>
	);
};

InformationVehicles.propTypes = { 
	name: PropTypes.string,
	description: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	manufacturer: PropTypes.string,
	cargo_capacity: PropTypes.string,
	crew: PropTypes.string,
	max_atmosphering_speed: PropTypes.string
}







