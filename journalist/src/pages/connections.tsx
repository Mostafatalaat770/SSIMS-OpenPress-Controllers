import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FC } from "../types";

const navElements = [
	{
		name: "Active",
		path: "active",
	},
	{
		name: "Pending",
		path: "pending",
	},
	{
		name: "New",
		path: "new",
	},
	{
		name: "Accept",
		path: "accept",
	},
];

export const Connections: FC = () => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{navElements.map((e) => (
								<Nav.Link as={Link} key={e.path} to={e.path}>
									{e.name}
								</Nav.Link>
							))}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};
