import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const InformationPlanets = (props) => {

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
					<p><strong>Climate</strong></p>
					<p><strong>{props.climate}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Diameter</strong></p>
					<p><strong>{props.diameter}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Gravity</strong></p>
					<p><strong>{props.gravity}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Terrain</strong></p>
					<p><strong>{props.terrain}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Orbital Period</strong></p>
					<p><strong>{props.orbital_period}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Rotation Period</strong></p>
					<p><strong>{props.rotation_period}</strong></p>
				</div>		
			</div>
			<button type="button" className="btn btn-warning col-xl-2 col-lg-2 col-md-4 col-6 m-auto mt-3" onClick={() => {actions.addFavouritePlanet(props.id, props.name, url)}}>Add favourite</button>
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







