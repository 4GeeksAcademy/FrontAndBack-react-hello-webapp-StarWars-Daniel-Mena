import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("d-none")
	
	useEffect(()=>{
		if (!localStorage.getItem("token")){
			setUser("d-none")
		}
		else{
			setUser("d-flex flex-row justify-content-between align-items-center")
		}
	})

	const closeSession = () =>{
		localStorage.removeItem("token");
    	navigate("/")
	}

	return (
		<nav className="navbar navbar-light bg-light mb-1 bg-transparent">
			<div className="d-flex flex-row justify-content-between align-items-center">
				<Link to="/home">
				<img className="col-xl-2 col-lg-2 col-md-4 col-6 ms-3" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png" />
				</Link>
				<div className={user}>
					<div className="btn-group" role="group">
						<button id="btnGroupDro" type="button" className="btn btn-primary dropdown-toggle me-5 gap-2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						<span className="me-1">Favourites</span><span className="me-1 px-1 bg-secondary bg-opacity-75 rounded-circle">{store.numFavoutire}</span> 
						</button>
						<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
							{store.numFavoutire===0 ? <p className="d-flex justify-content-center mb-0">(empty)</p> : store.favourite.map((item, index) => (
								<li className="d-flex flex-row flex-nowrap justify-content-between" key={index}>
									<Link to={item.url}>
										<p className="dropdown-item flex-shrink-1">{item.info.name}</p>
									</Link>
									<i className="fa fa-trash m-2" onClick={()=>actions.deleteFavourite(item.id)}></i>
								</li>	
							))}
						</ul>
					</div>
					<div className="btn-group" role="group">
						<button id="btnGroupDro" type="button" className="btn btn-primary dropdown-toggle me-5 gap-2" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="true">
						<i className="fa fa-user"></i> 
						</button>
						<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
							<li className="dropdown-item d-flex flex-row flex-nowrap justify-content-between" onClick={()=>closeSession()}>Cerrar Sesión</li>
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
	);
};
