import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

export const AcceptConnection = () => {
	const [invitationObjectInput, setInvitationObjectInput] = useState<any>();
	const [invitationUrlInput, setInvitationUrlInput] = useState<any>();
	const [error, setError] = useState<any>();
	const checkUrl = (data: any) => {
		setInvitationUrlInput(data);
		try {
			const url = new URL(data);
			const invitationParam = url.searchParams.get("c_i");

			if (!invitationParam) {
				throw new Error();
			}

			setInvitationObjectInput(
				JSON.stringify(JSON.parse(atob(invitationParam)), null, 4)
			);
			setError(null);
		} catch (error) {
			setInvitationObjectInput("");
			setError("Invalid URL");
		}
	};
	const checkObj = (jsonStr: any) => {
		setInvitationObjectInput(jsonStr);
		try {
			JSON.parse(jsonStr);
			setError(null);
		} catch (e: any) {
			console.log(e.message);

			setError(e.message);
			return false;
		}
		return true;
	};
	const OnSubmit = () => {
		if (!error && (invitationObjectInput || invitationUrlInput)) {
			//TODO: accept from aires agent and redirect to /connections
		}
	};
	return (
		<Container>
			<Form noValidate autoComplete="false">
				<Form.Group>
					<Form.Label>Paste the invitation object:</Form.Label>
					<Form.Control
						as="textarea"
						onChange={(e) => checkObj(e.target.value)}
						value={invitationObjectInput}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Paste the invitation URL:</Form.Label>
					<Form.Control
						type="input"
						onChange={(e) => checkUrl(e.target.value)}
						value={invitationUrlInput}
					/>
				</Form.Group>
				<Form.Group>
					<Button
						variant="primary"
						onClick={OnSubmit}
						disabled={error !== null}
					>
						Accept
					</Button>
				</Form.Group>
				{error && <Alert variant="danger">{error}</Alert>}
			</Form>
		</Container>
	);
};
