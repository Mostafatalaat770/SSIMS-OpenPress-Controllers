import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
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
			name: "Articles",
			path: "/articles",
		},
		{
			name: "Proof Request",
			path: "/proof-request",
		},
		{
			name: "Messenger",
			path: "/messenger",
		},
	];
	return (
		<div>
			<header>
				<div>
					<ul></ul>
				</div>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">Publisher</Navbar.Brand>
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
			</header>
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};
