import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { ProofRequest } from "../pages/proofRequest";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";
import { Connections } from "../pages/connections";
import { Active } from "../pages/connections/active";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="connections" element={<Connections />}>
					<Route index element={<Active />} />
					<Route path="active" element={<Active />} />
				</Route>
				<Route path="proof-request" element={<ProofRequest />} />
			</Route>
		</Routes>
	);
};
