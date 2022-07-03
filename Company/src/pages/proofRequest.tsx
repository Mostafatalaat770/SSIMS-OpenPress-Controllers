import { useEffect, useState } from "react";
import { Alert, Container, Form, Button } from "react-bootstrap";
import agent from "../services/agent";
import proofData from "../data/proofTemplate.json";
export const ProofRequest = () => {
	const [metadata, setMetadata] = useState<string>(
		JSON.stringify(proofData.proof_request, null, 4)
	);

	const [contentError, setMetadataError] = useState<string | null>(null);
	const [connections, setConnections] = useState<any>(null);
	const [connectionId, setConnectionId] = useState<string>("");
	const [creditentialDefinitionId, setCreditentialDefinitionId] =
		useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await agent.getConnections();

			setConnections(
				response.data.results.filter(
					(connection: any) => connection.state === "active"
				)
			);
		};
		fetchData();
	}, []);
	const onMetadataChange = (data: string) => {
		setMetadata(data);
		try {
			JSON.parse(data);
			setMetadataError(null);
		} catch (e: any) {
			console.log(e.message);

			setMetadataError(e.message);
		}
	};
	const onSubmit = async () => {
		if (!connectionId || !creditentialDefinitionId) {
			return;
		}
		const response = await agent.sendProofRequest({
			connection_id: connectionId,
			proof_request: JSON.parse(metadata),
		});
		console.log(response);
	};
	return (
		<Container>
			<h2>Proof Request</h2>
			<Form>
				<Form.Group>
					<Form.Label>Connection ID</Form.Label>
					<Form.Control
						as="select"
						onChange={(e) => {
							setConnectionId(e.currentTarget.value);
							console.log(e);
						}}
					>
						<option selected disabled value="">
							Select a Connection
						</option>
						{connections &&
							connections.map((c: any) => (
								<option key={c.connection_id} value={c.connection_id}>
									{c.their_label}:{c.connection_id}
								</option>
							))}
					</Form.Control>
					<Form.Label>Article Credential Definition ID</Form.Label>
					<Form.Control
						as="input"
						value={creditentialDefinitionId}
						onChange={(e) => {
							const value =
								e.currentTarget.value ||
								"<Enter valid credential definition id>";
							setCreditentialDefinitionId(value);
							const metadataObj = JSON.parse(metadata);
							Object.keys(metadataObj.requested_attributes)
								.filter(
									(attr) => metadataObj.requested_attributes[attr].restrictions
								)
								.forEach((attr) => {
									metadataObj.requested_attributes[
										attr
									].restrictions[0].cred_def_id = value;
								});
							Object.keys(metadataObj.requested_predicates)
								.filter(
									(attr) => metadataObj.requested_predicates[attr].restrictions
								)
								.forEach((attr) => {
									metadataObj.requested_predicates[
										attr
									].restrictions[0].cred_def_id = value;
								});
							setMetadata(JSON.stringify(metadataObj, null, 4));
						}}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Metadata</Form.Label>
					<Form.Control
						as="textarea"
						style={{ height: 200 }}
						onChange={(e) => onMetadataChange(e.currentTarget.value)}
						value={metadata}
					/>
					{contentError && <Alert variant="danger">{contentError}</Alert>}
				</Form.Group>
				<Button onClick={onSubmit}>Submit</Button>
			</Form>
		</Container>
	);
};
