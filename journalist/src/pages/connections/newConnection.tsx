import { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

export const NewConnection = () => {
	const [invitation, setInvitation] = useState<any>(null);
	const OnSubmit = () => {
		// TODO: create a new connection from aires agent and set invitation
		console.log("invitation", invitation);
	};
	const copy = async () => {
		await navigator.clipboard.writeText(
			JSON.stringify(invitation, null, 4) || ""
		);
	};
	return (
		<Container>
			<Form noValidate autoComplete="false">
				<button
					type="button"
					className="btn btn-primary btn-lg btn-block mb-3"
					onClick={OnSubmit}
					disabled={invitation !== null}
				>
					Create New Invitation
				</button>
			</Form>
			{invitation && (
				<div className="row">
					<div className="col-12">
						<Form.Group>
							<Form.Label>Copy the following invitation object:</Form.Label>
							<InputGroup>
								<Form.Control
									readOnly
									as={"textarea"}
									value={JSON.stringify(invitation, null, 4) || ""}
									size="lg"
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
						<Form.Group>
							<Form.Label>
								Alternatively copy the following invitation URL:
							</Form.Label>
							<InputGroup>
								<Form.Control
									type="text"
									value={invitation.invitation_url || ""}
									readOnly
								/>
								<button
									className="btn btn-outline-secondary"
									type="button"
									onClick={() =>
										navigator.clipboard.writeText(invitation.invitation_url)
									}
								>
									<i className="fas fa-clipboard"></i>
								</button>
							</InputGroup>
						</Form.Group>
					</div>
				</div>
			)}
		</Container>
	);
};
