import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { InformationCharacter } from "../component/informationCharacter.js";
import { InformationPlanets } from "../component/informationPlanets.js";
import { useParams } from "react-router-dom";
export const Details = (props) => {

	const params = useParams();

	const { store, actions } = useContext(Context);

	
	let componentInfo = null

	if (params.category==="people") {
		componentInfo= <InformationCharacter name={store.listDetails.name} description={store.listDescription} gender={store.listDetails.gender} height={store.listDetails.height} mass={store.listDetails.mass} hair_color={store.listDetails.hair_color} skin_color={store.listDetails.skin_color} eye_color={store.listDetails.eye_color}/>
	}
	else if (params.category==="planets"){
		componentInfo= <InformationPlanets name={store.listDetails.name} description={store.listDescription} climate={store.listDetails.climate} diameter={store.listDetails.diameter} gravity={store.listDetails.gravity} terrain={store.listDetails.terrain} orbital_period={store.listDetails.orbital_period} rotation_period={store.listDetails.rotation_period}/>			
	}
	// else if (params.category==="vehicles"){
	// 	setComponentInfo(`<Information name={store.listDetails.name} description={store.listDescription}/>`)
	// }
	

	useEffect(() => {
		
		actions.getDetail(`https://www.swapi.tech/api/${params.category}/${params.theid}`);

	}, []);
	
	console.log(store.listDetails);	

	return (
		<div>
			{componentInfo}
		</div>
		
	)	
};

