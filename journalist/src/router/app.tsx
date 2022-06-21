import { Route, Routes } from "react-router-dom";
import { Article } from "../Components/Article";
import { Articles } from "../pages/articles";
import { Messenger } from "../pages/messenger";
import { Home } from "../pages/home";
import { ProofRequest } from "../pages/proofRequest";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="articles">
					<Route index element={<Articles />} />
					<Route path=":id" element={<Article />} />
				</Route>
				<Route path="proof-request" element={<ProofRequest />} />
				<Route path="messenger" element={<Messenger />} />
			</Route>
		</Routes>
	);
};
