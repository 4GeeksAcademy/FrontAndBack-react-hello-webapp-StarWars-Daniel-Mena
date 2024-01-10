import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Character } from "../component/character";
import { Planet } from "../component/planets.js";
import { Vehicle } from "../component/vehicle.js";



export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacter();
		actions.getPlanet();
		actions.getVehicle();
	}, []);
	
	return (
		<div className="mt-5">
			<div className="d-flex flex-row gap-3 ms-3">
				<h1 className="text-warning my-3">Characters</h1>
				<i className="fa fa-2x fa-user-astronaut text-warning mt-4"></i>
			</div>
			<ul className="list-group d-flex flex-row overflow-auto gap-3 p-3 mb-5" id="contact-list">
				{store.listCharacter.map((item) => (
					<li className="list-group" key={item.uid}>
						<Character  id={item.uid} name={item.name}/>
					</li>
			))}
			</ul>
			<div className="d-flex flex-row gap-1 ms-3">
				<h1 className="text-warning my-3 ">Planets</h1>
				<i className="fa fa-2x fa-globe text-warning mt-4 ms-3"></i>
			</div>
			<ul className="list-group d-flex flex-row overflow-auto gap-3 p-3 mb-5" id="contact-list">
				{store.listPlanet.map((item) => (
					<li className="list-group" key={item.uid}>
						<Planet id={item.uid} name={item.name}/>
					</li>	
				))}
			</ul>
			<div className="d-flex flex-row gap-3 ms-3">
				<h1 className="text-warning my-3">Vehicles</h1>
				<i className="fa fa-2x fa-rocket text-warning mt-4"></i>
			</div>
			<ul className="list-group d-flex flex-row overflow-auto gap-3 p-3 pb-2" id="contact-list">
				{store.listVehicle.map((item) => (
					<li className="list-group" key={item.uid}>
						<Vehicle id={item.uid} name={item.name}/>
					</li>
				))}
			</ul>
		
		</div>
	)	
};
