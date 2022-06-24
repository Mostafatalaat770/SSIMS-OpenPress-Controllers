import { Route, Routes } from "react-router-dom";
import { Article } from "../Components/Article";
import { Articles } from "../pages/articles";
import { Messenger } from "../pages/messenger";
import { Home } from "../pages/home";
import { ProofRequest } from "../pages/proofRequest";
import { Layout } from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";
import { Connections } from "../pages/connections";
import { Active } from "../pages/connections/active";
import { Pending } from "../pages/connections/pending";
import { NewConnection } from "../pages/connections/newConnection";
import { AcceptConnection } from "../pages/connections/acceptConnection";
import { Credentials } from "../pages/credentials";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="articles">
					<Route index element={<Articles />} />
					<Route path=":id" element={<Article />} />
				</Route>
				<Route path="connections" element={<Connections />}>
					<Route index element={<Active />} />
					<Route path="active" element={<Active />} />
					<Route path="pending" element={<Pending />} />
					<Route path="new" element={<NewConnection />} />
					<Route path="accept" element={<AcceptConnection />} />
				</Route>
				<Route path="credentials" element={<Credentials />} />
				<Route path="proof-request" element={<ProofRequest />} />
				<Route path="messenger" element={<Messenger />} />
			</Route>
		</Routes>
	);
};
