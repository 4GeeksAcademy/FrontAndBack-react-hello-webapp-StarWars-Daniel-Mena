import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const InformationVehicles = (props) => {

	const params = useParams();
	const { store, actions } = useContext(Context);
	const url = `/details/${params.category}/${params.theid}`
	
	return (
		<div className="m-auto col-12 d-flex flex-column">
			<div className="d-flex flex-row gap-3">
				<img src={props.img} className="col-6" alt="Character img"/>
				<div className="col-6 text-white">
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="text-danger text-center d-flex flex-wrap mt-3 pt-2">
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Model</strong></p>
					<p><strong>{props.model}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Length</strong></p>
					<p><strong>{props.length}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Manufacturer</strong></p>
					<p><strong>{props.manufacturer}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Cargo Capacity</strong></p>
					<p><strong>{props.cargo_capacity}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Crew</strong></p>
					<p><strong>{props.crew}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Max Atmosphering Speed</strong></p>
					<p><strong>{props.max_atmosphering_speed}</strong></p>
				</div>			
			</div>
			<button type="button" className="btn btn-warning col-xl-2 col-lg-2 col-md-4 col-6 m-auto mt-3" onClick={() => {actions.addFavouriteVehicle(props.id, props.name, url)}}>Add favourite</button>
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







