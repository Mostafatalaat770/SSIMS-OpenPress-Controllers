import { Card, CloseButton } from "react-bootstrap";
import { IConnection } from "./types";
interface ConnectionCardProps {
	connection: IConnection;
}
export const ConnectionCard = ({ connection }: ConnectionCardProps) => {
	const {
		initiator,
		state,
		created_at,
		connection_id,
		their_did,
		their_label,
		updated_at,
	} = connection;
	return (
		<Card>
			<Card.Body>
				<Card.Title
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<small className="text-muted">Created {created_at}</small>
					<CloseButton />
				</Card.Title>
				{state === "active" || state === "request" ? (
					<>
						<Card.Title>
							<small>
								<span>{initiator === "self" ? "Sent" : "Received"}</span>
							</small>
						</Card.Title>
						<Card.Text
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div className="text-muted">
								{initiator === "self" ? "To:" : "From:"}
							</div>
							<span>{their_label}</span>
							<span>
								<small className="text-muted">DID:</small>
							</span>
							<span>{their_did}</span>
						</Card.Text>
					</>
				) : (
					<>
						<Card.Text
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div className="text-muted">Connection ID:</div>
							<span>{connection_id}</span>
						</Card.Text>
					</>
				)}
			</Card.Body>
			<Card.Footer>
				<p>
					<small className="text-muted">Last updated {updated_at}</small>
				</p>
			</Card.Footer>
		</Card>
	);
};
