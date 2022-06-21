import { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { IConnection } from "./connections/types";

const defaultCredential = {
	comment: "string",
	credential_proposal: {
		"@type":
			"did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/issue-credential/1.0/credential-preview",
		attributes: [{}],
	},
	schema_issuer_did: "",
	connection_id: "",
	schema_version: "",
	schema_id: "",
	issuer_did: "",
	cred_def_id: "",
	schema_name: "",
};

export const Credentials = () => {
	const [credentialDefinitionIds, setCredentialDefinitionIds] =
		useState<any>(null);
	const [schemaIds, setSchemaIds] = useState<any>(null);
	const [connections, setConnections] = useState<any>(null);
	const [selectedConnection, setSelectedConnection] = useState<string | null>(
		null
	);
	const [selectedCredentialDefinitionId, setSelectedCredentialDefinitionId] =
		useState<string | null>(null);
	const [selectedSchemaId, setSelectedSchemaId] = useState<string | null>(null);
	const [inputData, setInputData] = useState<{ [key: string]: string } | null>(
		null
	);

	const [error, setError] = useState<any>(null);

	useEffect(() => {
		//TODO: fetch connections, credential definitions and schemas from aires agent

		//TODO: set connections, credential definitions and schemas to state

		//TODO: get attrs from schema and set to state
		const data: string[] = ["name", "email", "phone", "age"];

		setInputData(
			data.reduce((acc, curr) => {
				acc[curr] = "";
				return acc;
			}, {} as { [curr: string]: string })
		);
	}, []);

	const handleValidSubmit = async () => {
		const credential = defaultCredential;
		const schemaId = selectedSchemaId;
		const credentialDefinitionId = selectedCredentialDefinitionId;
		const connectionId = selectedConnection;
		if (!credentialDefinitionId || !schemaId || !connectionId || !inputData) {
			return;
		}
		var schemaArr = schemaId.split(":");
		credential["schema_issuer_did"] = schemaArr[0];
		credential["schema_version"] = schemaArr[3];
		credential["schema_id"] = schemaId;
		credential["schema_name"] = schemaArr[2];

		const credDefArr = credentialDefinitionId.split(":");
		credential["issuer_did"] = credDefArr[0];
		credential["cred_def_id"] = credentialDefinitionId;

		credential["connection_id"] = connectionId;

		credential["credential_proposal"]["attributes"] = Object.entries(
			inputData
		).map(([key, value]) => {
			return {
				name: key,
				value,
			};
		});

		// TODO: call the API to issue the credential and redirect to connections page
	};
	return (
		<Container>
			<Form noValidate autoComplete="false">
				<Form.Group>
					<Form.Label>Connection</Form.Label>
					<Form.Control
						as="select"
						onChange={(e) => setSelectedConnection(e.target.value)}
					>
						<option selected disabled value="">
							Select a Connection
						</option>

						{connections &&
							connections.map((connection: IConnection) => (
								<option key={connection.connection_id}>
									{connection.their_label}:{connection.connection_id}
								</option>
							))}
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Credential Definition</Form.Label>
					<Form.Control
						as="select"
						onChange={(e) => setSelectedCredentialDefinitionId(e.target.value)}
					>
						<option selected disabled value="">
							Select a CredentialDefinition
						</option>

						{credentialDefinitionIds &&
							credentialDefinitionIds.map((credentialDefinitionId: string) => (
								<option key={credentialDefinitionId}>
									{credentialDefinitionId}
								</option>
							))}
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Schema</Form.Label>
					<Form.Control
						as="select"
						onChange={(e) => setSelectedSchemaId(e.target.value)}
					>
						<option selected disabled value="">
							Select a Schema
						</option>

						{schemaIds &&
							schemaIds.map((schemaId: string) => (
								<option key={schemaId}>{schemaId}</option>
							))}
					</Form.Control>
				</Form.Group>
				<Form.Group>
					{inputData &&
						Object.entries(inputData).map(([attr, value]) => (
							<div>
								<Form.Label key={attr}>{attr}</Form.Label>
								<Form.Control
									as="input"
									key={attr}
									value={inputData[attr]}
									onChange={(e) => {
										setInputData({ ...inputData, [attr]: e.target.value });
									}}
								/>
							</div>
						))}
				</Form.Group>
				{error && <Alert variant="danger">{error}</Alert>}
				<Button variant="primary" onClick={handleValidSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
};
