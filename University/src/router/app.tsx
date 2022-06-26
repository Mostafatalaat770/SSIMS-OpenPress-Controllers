import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";
import { Connections } from "../pages/connections";
import { Active } from "../pages/connections/active";
import { Credentials } from "../pages/credentials";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="connections" element={<Connections />}>
					<Route index element={<Active />} />
				</Route>
				<Route path="credentials" element={<Credentials />} />
			</Route>
		</Routes>
	);
};
