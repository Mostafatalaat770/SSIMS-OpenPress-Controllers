import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { CredentialCard } from "../Components/CrednetialCard";
import agent from "../services/agent";

export const Credentials = () => {
	const [credentials, setCredntials] = useState<any | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const response = await agent.getCredentials();
			setCredntials(response.data.results);
		};
		fetchData();
	}, []);
	if (!credentials) return <div>loading...</div>;
	return (
		<Container>
			<CardGroup>
				{credentials.map((c: any, index: number) => (
					<CredentialCard key={index} {...c} attributes={c.attrs} />
				))}
			</CardGroup>
		</Container>
	);
};
