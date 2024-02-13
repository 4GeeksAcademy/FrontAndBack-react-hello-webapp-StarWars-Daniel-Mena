import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { InformationCharacter } from "../component/informationCharacter.js";
import { InformationPlanets } from "../component/informationPlanets.js";
import { InformationVehicles } from "../component/informationVehicles.js";
import { useParams } from "react-router-dom";
export const Details = (props) => {

	const params = useParams();

	const { store, actions } = useContext(Context);

	
	let componentInfo = null

	if (params.category==="persons") {
		componentInfo= <InformationCharacter id={store.listDetails.id} name={store.listDetails.name} description={store.listDescription} gender={store.listDetails.gender} height={store.listDetails.height} mass={store.listDetails.mass} hair_color={store.listDetails.hair_color} skin_color={store.listDetails.skin_color} eye_color={store.listDetails.eye_color} img={store.listDetails.url_img}/>
	}
	else if (params.category==="planets"){
		componentInfo= <InformationPlanets id={store.listDetails.id} name={store.listDetails.name} description={store.listDescription} climate={store.listDetails.climate} diameter={store.listDetails.diameter} gravity={store.listDetails.gravity} terrain={store.listDetails.terrain} orbital_period={store.listDetails.orbital_period} rotation_period={store.listDetails.rotation_period} img={store.listDetails.url_img}/>			
	}
	else if (params.category==="vehicles"){
		componentInfo= <InformationVehicles id={store.listDetails.id} name={store.listDetails.name} description={store.listDescription} model={store.listDetails.model} length={store.listDetails.length} manufacturer={store.listDetails.manufacturer} cargo_capacity={store.listDetails.cargo_capacity} crew={store.listDetails.crew} max_atmosphering_speed={store.listDetails.max_atmosphering_speed} img={store.listDetails.url_img}/>
	}
	

	useEffect(() => {
		
		actions.getDetail(`https://solid-space-fortnight-v6v9g5r7rjxvcxqg4-3000.app.github.dev/${params.category}/${params.theid}`);

	}, [params.category, params.theid]);

	return (
		<div>
			{componentInfo}
		</div>
		
	)	
};

