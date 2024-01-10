import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { InformationCharacter } from "../component/informationCharacter.js";
import { useParams } from "react-router-dom";
export const Details = (props) => {

	const params = useParams();

	const { store, actions } = useContext(Context);

	// const [componentInfo, setComponentInfo] = useState("");
	// if (params.category==="planets") {
	// 	setComponentInfo(`<Information name={store.listDetails.name} description={store.listDescription}/>`)
	// }
	// else if (params.category==="people"){
	// 	setComponentInfo(`<InformationCharacter name={store.listDetails.name} description={store.listDescription}/>`)
	// }
	// else if (params.category==="vehicles"){
	// 	setComponentInfo(`<Information name={store.listDetails.name} description={store.listDescription}/>`)
	// }
	

	useEffect(() => {
		actions.getDetail(`https://www.swapi.tech/api/${params.category}/${params.theid}`);
	}, []);
	
	console.log(store.listDetails);
	console.log(store.listDescription);
	

	return (
        // {componentInfo}
		<InformationCharacter name={store.listDetails.name} description={store.listDescription} gender={store.listDetails.gender} height={store.listDetails.height} mass={store.listDetails.mass} hair_color={store.listDetails.hair_color} skin_color={store.listDetails.skin_color} eye_color={store.listDetails.eye_color}/>
	)	
};

