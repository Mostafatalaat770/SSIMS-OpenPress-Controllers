import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import agent from "../services/agent";

export const Home = () => {
	const [connection, setConnection] = useState<any>(null);
	useEffect(() => {
		const fetchData = async () => {
			const response = await agent.createInvitation();
			setConnection(response.data);
		};
		fetchData();
	}, []);
	const copy = async () => {
		await navigator.clipboard.writeText(connection.invitation_url);
	};
	if (!connection) {
		return <div>loading...</div>;
	}
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			<h1>Home</h1>
			<div>In order to join our network, please scan this QR code</div>
			{<QRCodeSVG value={JSON.stringify(connection.invitation)} size={256} />}
			<Form>
				<Form.Group>
					<Form.Label>Or you copy the invitation_url: </Form.Label>
					<InputGroup>
						<Form.Control
							type="text"
							disabled
							value={connection.invitation_url}
						/>
						<button
							className="btn btn-outline-secondary"
							type="button"
							onClick={copy}
						>
							<i className="fas fa-clipboard"></i>
						</button>
					</InputGroup>
				</Form.Group>
			</Form>
		</div>
	);
};
