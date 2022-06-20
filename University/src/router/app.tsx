import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";
import { Connections } from "../pages/connections";
import { Active } from "../pages/connections/active";
import { Pending } from "../pages/connections/pending";
import { NewConnection } from "../pages/connections/newConnection";
import { AcceptConnection } from "../pages/connections/acceptConnection";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="connections" element={<Connections />}>
					<Route index element={<Active />} />
					<Route path="active" element={<Active />} />
					<Route path="pending" element={<Pending />} />
					<Route path="new" element={<NewConnection />} />
					<Route path="accept" element={<AcceptConnection />} />
				</Route>
			</Route>
		</Routes>
	);
};
