import { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";

export const ProofRequest = () => {
	const [metadata, setMetadata] = useState<string>("{}");

	const [contentError, setMetadataError] = useState<string | null>(null);

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
	return (
		<Container>
			<h2>Proof Request</h2>
			<Form>
				<Form.Group>
					<Form.Label>Connection ID</Form.Label>
					<Form.Control as="select">
						<option selected disabled value="">
							Select a Connection
						</option>
					</Form.Control>
					<Form.Label>Article Credential Definition ID</Form.Label>
					<Form.Control as="input" />
				</Form.Group>
				<Form.Group>
					<Form.Label>Metadata</Form.Label>
					<Form.Control
						as="textarea"
						style={{ height: "100px" }}
						onChange={(e) => onMetadataChange(e.currentTarget.value)}
						value={metadata}
					/>
					{contentError && <Alert variant="danger">{contentError}</Alert>}
				</Form.Group>
			</Form>
		</Container>
	);
};
