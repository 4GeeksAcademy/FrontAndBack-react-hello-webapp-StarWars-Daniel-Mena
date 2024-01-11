import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-1 bg-transparent">
			<div className="d-flex flex-row justify-content-between">
				<Link to="/">
				{/* <span className="navbar-brand mb-0 ms-3">Star Wars</span> */}
				<img className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ms-1" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png" />
				</Link>
				<div className="ml-auto">
					<div className="btn-group mt-4 me-5" role="group">
						<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle me-5" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites {store.numFavoutire}
						</button>
						<ul className="dropdown-menu position-absolute end-0" aria-labelledby="btnGroupDrop1">
							{store.numFavoutire===0 ? <p className="d-flex justify-content-center mb-0">(empty)</p> : store.favourite.map((item, index) => (
								<li className="d-flex flex-row justify-content-center" key={index}>
									<a className="dropdown-item" href="#">{item}</a>
									<i className="fa fa-trash m-2" onClick={()=>actions.deleteFavourite(item)}></i>
								</li>	
							))}
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
	);
};
