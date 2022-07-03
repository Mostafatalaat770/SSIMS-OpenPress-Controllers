import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { ConnectionCard } from "./ConnectionCard";
import { IConnection } from "./types";
import agent from "../../services/agent";
export const Active = () => {
	const [connections, setConnections] = useState<IConnection[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await agent.getConnections();
			const activeConnections = response.data.results.filter(
				(connection: IConnection) => connection.state === "active"
			);
			setConnections(activeConnections);
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
