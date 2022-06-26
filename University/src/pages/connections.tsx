import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { FC } from "../types";

export const Connections: FC = () => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};
