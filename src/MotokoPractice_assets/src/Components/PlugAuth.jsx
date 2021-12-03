import React, { useState, useEffect } from "react";
import css from "./PlugAuth.module.css";

const PlugAuth = () => {
	const [isConnected, setIsConnected] = useState(false);
	const [balance, setBalance] = useState();
	const [loading, setLoading] = useState(false);

	const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
	const whitelist = [nnsCanisterId];
	const host = "https://mainnet.dfinity.network";

	// PLUG TO WALLET
	const plug = async () => {
		const connect = await window.ic.plug.requestConnect({ whitelist, host });
		// status
		const connectionsStatus = await window.ic.plug.isConnected();
		setIsConnected(connectionsStatus);

		// request balance
		setLoading(true);
		const getBalance = await window.ic.plug.requestBalance();
		setBalance(getBalance);
		console.log(getBalance);
		setLoading(false);

		const connectionState = connect ? "allowed" : "denied";
		console.log(`The Connection was ${connectionState}!`);
	};

	// autoconnect after page load
	// useEffect(() => {
	// 	if (!isConnected) {
	// 		plug();
	// 	}
	// }, []);

	return (
		<div className={css.plug}>
			<button onClick={plug}>Connect to Plug</button>
			<p>Connect to plug to get your wallet data</p>
			<h4>Plug data</h4>
			<p>Connection state: {isConnected ? "true" : "false"}</p>
			<p>ICP Balance: {!balance || loading ? "Fetching..." : balance[0].amount}</p>
			<p>XTC Balance: {!balance || loading ? "Fetching..." : balance[1].amount}</p>
			<p>Canister Id: {!balance || loading ? "Fetching..." : balance[0].canisterId}</p>
			{console.log(!balance || loading ? null : balance[0].amount)}
		</div>
	);
};

export default PlugAuth;
