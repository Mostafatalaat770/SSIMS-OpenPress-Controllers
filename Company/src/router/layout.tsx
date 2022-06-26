import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	const [activeTab, setActiveTab] = useState(0);
	const navElements = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Connections",
			path: "/connections",
		},
		{
			name: "Proof Request",
			path: "/proof-request",
		},
	];
	return (
		<div>
			<header>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">Company</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								{navElements.map((e, index) => (
									<Nav.Link
										as={Link}
										key={e.path}
										to={e.path}
										active={index === activeTab}
										onClick={() => setActiveTab(index)}
									>
										{e.name}
									</Nav.Link>
								))}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};
