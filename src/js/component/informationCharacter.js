import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const InformationCharacter = (props) => {
	return (
		<div className="m-auto col-8 d-flex flex-column">
			<div className="d-flex flex-row gap-3">
				<img src="https://vasavihospitals.com/public/uploads/images/632ae685ed739.gif" className="col-6" alt="Character img"/>
				<div className="col-6">
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="text-danger d-flex flex-row justify-content-between mt-3">
				<div className="d-flex flex-column align-items-center">
					<p>Gender</p>
					<p>{props.gender}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Height</p>
					<p>{props.height}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Mass</p>
					<p>{props.mass}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Hair Color</p>
					<p>{props.hair_color}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Skin Color</p>
					<p>{props.skin_color}</p>
				</div>
				<div className="d-flex flex-column align-items-center">
					<p>Eye Color</p>
					<p>{props.eye_color}</p>
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







