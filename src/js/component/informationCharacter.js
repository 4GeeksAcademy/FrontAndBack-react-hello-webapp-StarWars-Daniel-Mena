import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const InformationCharacter = (props) => {

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
					<p><strong>Gender</strong></p>
					<p><strong>{props.gender}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Height</strong></p>
					<p><strong>{props.height}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Mass</strong></p>
					<p><strong>{props.mass}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Hair Color</strong></p>
					<p><strong>{props.hair_color}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Skin Color</strong></p>
					<p><strong>{props.skin_color}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-4 col-6 border-top border-danger mt-2">
					<p><strong>Eye Color</strong></p>
					<p><strong>{props.eye_color}</strong></p>
				</div>			
			</div>
			<button type="button" className="btn btn-warning col-xl-2 col-lg-2 col-md-4 col-6 m-auto mt-3" onClick={() => {actions.addFavouritePerson(props.id, props.name, url)}}>Add favourite</button>
		</div>
	);
};

InformationCharacter.propTypes = { 
	name: PropTypes.string,
	description: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string
}







