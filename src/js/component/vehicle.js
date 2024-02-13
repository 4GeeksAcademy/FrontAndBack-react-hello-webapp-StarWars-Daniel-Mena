import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicle = (props) => {

	const url = `/details/vehicles/${props.id}`

	const [bgButton, setBgButton] = useState(false);
	const [bgIcon, setBgIcon] = useState(false)
	const [selcFav, setSelecFav] = useState(false)

	const { store, actions } = useContext(Context);

	useEffect(()=>{
		
		const nameFavoritos = store.favourite.map(item => item.info.name)

		if(nameFavoritos.includes(props.name)) {
			setSelecFav(true)
			setBgIcon(true)
		}
		else{
			setSelecFav(false)
			setBgIcon(false)
		}
		
	}, [store.favourite])

	const buttonOver = () =>{
		setBgButton(true)
	}

	const buttonOut = () =>{
		setBgButton(false)
	}

	const iconOver = () =>{
		setBgIcon(true)
	}

	const iconOut = () =>{
		if(selcFav===false){
			setBgIcon(false)
		}
	}
	
	return (
		<div className="card border-warning border-3">
			<img src={props.img} className="card-img-top" alt="Vehicle img" style={{height:"250px"}}/>
			<div className="card-body">
				<h5 className="card-title mb-5">{props.name}</h5>
				<div className="d-flex justify-content-between">
					<Link to={url}>
						<button type="button" className={`btn ${bgButton==false ? "btn-outline-primary" : "btn-primary"}`} onMouseOver={buttonOver} onMouseOut={buttonOut}>
							Learn More!
						</button>
					</Link>
					<i className={`fa fa-2x fa-heart mt-1 me-1 ${bgIcon==false ? "text-primary": "text-warning"}`} onMouseOver={iconOver} onMouseOut={iconOut} onClick={() => actions.addFavouriteVehicle(props.id, props.name, url)}></i>
				</div>
			</div>
		</div>
	);
};

Vehicle.propTypes = { 
	key: PropTypes.string,
	name: PropTypes.string
}