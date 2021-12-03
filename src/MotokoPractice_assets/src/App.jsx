import React, { useState, useEffect } from "react";
// import "./App.css";
import { AuthClient } from "@dfinity/auth-client";
import PlugAuth from "./Components/PlugAuth";

const App = ({ MotokoPractice }) => {
	const [authClient, setAuthClient] = useState(undefined);
	const [whoAmI, setWhoAmI] = useState();
	const [identity, setIdentity] = useState();

	useEffect(async () => {
		const client = await AuthClient.create();
		setAuthClient(client);
	}, []);

	const internetIdLogin = () => {
		authClient.login({
			onSuccess: async () => {
				console.log("authClient now has an identity");
				console.log(authClient.getIdentity());
			},
		});
	};

	const getIdentity = async () => {
		const id = await authClient.getIdentity();
		console.log(id);
		setIdentity(id);
	};

	const handleWhoAmI = async () => {
		const whoami = await MotokoPractice.whoami();
		setWhoAmI(JSON.stringify(whoami));
	};

	return (
		<div className="app center">
			<PlugAuth />

			{/* <p>1. Login to internet identity</p>
			<button onClick={internetIdLogin}>Login to Internet Identity</button>
			<p>Your internet identity is: </p>

			<p>2. Get identity</p>
			<button onClick={getIdentity}>Get identity</button>
			<p>Identity: {JSON.stringify(identity)}</p>

			<button onClick={() => console.log(authClient.getIdentity())}>2314</button>

			<button onClick={handleWhoAmI}>Who am I</button>
			<p>Who am i: {whoAmI}</p> */}
		</div>
	);
};

export default App;
