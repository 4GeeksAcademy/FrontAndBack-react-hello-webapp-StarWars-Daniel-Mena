import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Form_login } from "../component/form_login.js";




export const Login = () => {

	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem("token")){
			navigate("/home")
		}
		
	}, []);
	
	return (
		<div className="">
            <Form_login/>
		</div>
	)	
};
