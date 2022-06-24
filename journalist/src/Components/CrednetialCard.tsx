import { Card } from "react-bootstrap";

interface CredentialCardProps {
	schema_id: string;
	cred_def_id: string;
	attributes: { [key: string]: string };
}
export const CredentialCard = ({
	schema_id,
	cred_def_id,
	attributes,
}: CredentialCardProps) => {
	return (
		<Card>
			<Card.Body>
				<div>
					<small className="text-muted">Schema ID:</small>
					<p>{schema_id}</p>
				</div>
				<div>
					<small className="text-muted">Credential Definition ID :</small>
					<p>{cred_def_id}</p>
				</div>
				<div>
					<small className="text-muted">Attributes</small>
					{Object.entries(attributes).map(([key, value]) => (
						<p key={key}>
							<span>
								{key} : {value}
							</span>
						</p>
					))}
				</div>
			</Card.Body>
		</Card>
	);
};
