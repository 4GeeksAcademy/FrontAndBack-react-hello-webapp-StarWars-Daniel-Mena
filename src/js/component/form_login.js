import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Form_login = () => {

	
	const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(event) => {
		event.preventDefault();
		if (email != "" && password != "") {
           let loged =  await actions.login(email, password)
           if (loged) {
                navigate("/home")
           }
           else{
             window.alert("Error al introducir usuario o contraseña");
           }

		} else {
			window.alert("Faltan datos por incluir");
		}
	};


	return (
        <div className="d-flex m-auto">
            <form className="m-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                    <input value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
        </div>
		
	);
};
