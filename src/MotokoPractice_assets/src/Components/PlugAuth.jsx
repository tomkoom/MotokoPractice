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
		const connect = await window.ic.plug.requestConnect({
			// whitelist,
			host,
		});

		// const connection = connect ? "allowed" : "denied";
		// console.log(`The Connection was ${connection}!`);

		// connection state
		const connectionsState = await window.ic.plug.isConnected();
		setIsConnected(connectionsState);

		// request balance
		setLoading(true);
		const getBalance = await window.ic.plug.requestBalance();
		setBalance(getBalance);
		setLoading(false);
	};

	// request connection on page load
	// useEffect(() => {
	// 	if (!isConnected) {
	// 		plug();
	// 	}
	// }, []);

	return (
		<div className={css.plug}>
			<button onClick={plug}>Connect to Plug</button>
			<p className={css.plug__hint}>Connect to plug to get your wallet data</p>
			<h4>Plug data</h4>
			<div className={css.plug__data}>
				<p>Connection state: {isConnected ? "true" : "false"}</p>
				<p>
					ICP balance:{" "}
					{!loading && !balance
						? "..."
						: loading
						? "Fetching..."
						: balance
						? balance[0].amount
						: null}{" "}
					ICP
				</p>
				<p>
					XTC balance:{" "}
					{!loading && !balance
						? "..."
						: loading
						? "Fetching..."
						: balance
						? balance[1].amount
						: null}{" "}
					XTC
				</p>
			</div>
		</div>
	);
};

export default PlugAuth;
