import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const InformationCharacter = (props) => {
	return (
		<div className="m-auto col-12 d-flex flex-column">
			<div className="d-flex flex-row gap-3">
				<img src="https://vasavihospitals.com/public/uploads/images/632ae685ed739.gif" className="col-6" alt="Character img"/>
				<div className="col-6 text-white">
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="text-danger strong d-flex flex-row justify-content-between mt-3 border-top border-danger pt-2">
				<div className="d-flex flex-column align-items-center">
					<p><strong>Gender</strong></p>
					<p><strong>{props.gender}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Height</strong></p>
					<p><strong>{props.height}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Mass</strong></p>
					<p><strong>{props.mass}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Hair Color</strong></p>
					<p><strong>{props.hair_color}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Skin Color</strong></p>
					<p><strong>{props.skin_color}</strong></p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p><strong>Eye Color</strong></p>
					<p><strong>{props.eye_color}</strong></p>
				</div>			
			</div>
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







