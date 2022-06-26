import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { ConnectionCard } from "./ConnectionCard";
import connectionData from "../../data/connections.json";
import { IConnection } from "./types";

export const Active = () => {
	const [connections, setConnections] = useState<IConnection[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			// TODO: fetch data from Aries agent where state === 'active;
			setConnections(
				connectionData.connections.filter((c) => c.state === "active")
			);
		};
		fetchData();
	}, []);
	return (
		<Container>
			<CardGroup>
				{connections.map((c) => (
					<ConnectionCard key={c.connection_id} connection={c} />
				))}
			</CardGroup>
		</Container>
	);
};
