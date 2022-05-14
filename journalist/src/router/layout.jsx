import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	const navElements = [
		{
			name: "Home",
			path: "/",
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
			name: "Massenger",
			path: "/massenger",
		},
	];
	return (
		<div>
			<header>
				<div>
					<ul>
						{navElements.map((e) => (
							<Link key={e.path} to={e.path}>
								{e.name}
							</Link>
						))}
					</ul>
				</div>
			</header>
			<Outlet />
		</div>
	);
};
