import { Route, Routes } from "react-router-dom";
import { Article } from "../Components/Article";
import { Articles } from "../pages/articles";
import { Massenger } from "../pages/massenger";
import { Home } from "../pages/home";
import { ProofRequest } from "../pages/proofRequest";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="articles" element={<Articles />} />
				<Route path="/articles/:id" element={<Article />} />
				<Route path="/proof-request" element={<ProofRequest />} />
				<Route path="/massenger" element={<Massenger />} />
			</Route>
		</Routes>
	);
};
