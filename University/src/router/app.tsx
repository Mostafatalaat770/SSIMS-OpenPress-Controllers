import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};
