import React from "react";
import { render } from "react-dom";
import { MotokoPractice } from "../../declarations/MotokoPractice";
import App from "./App";

const Index = () => {
	return (
		<div>
			<App MotokoPractice={MotokoPractice} />
		</div>
	);
};

render(<Index />, document.getElementById("app"));
