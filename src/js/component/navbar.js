import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-1 bg-transparent">
			<div className="d-flex flex-row justify-content-between">
				<Link to="/">
				{/* <span className="navbar-brand mb-0 ms-3">Star Wars</span> */}
				<img className="col-lg-1 col-md-3 col-sm-5  col-xs-6 ms-3" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png" />
				</Link>
				<div className="ml-auto">
					<div className="btn-group mt-4 me-5" role="group">
						<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle me-5" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites
						</button>
						<ul className="dropdown-menu position-absolute end-0" aria-labelledby="btnGroupDrop1">
							<li className="d-flex flex-row justify-content-center"><a className="dropdown-item" href="#">C-3PO</a><i className="fa fa-trash m-2"></i></li>
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
	);
};
