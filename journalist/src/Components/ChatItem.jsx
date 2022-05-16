import { Card } from "react-bootstrap";

export const ChatItem = ({ label, did }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{label}</Card.Title>
				<Card.Text>{did}</Card.Text>
			</Card.Body>
		</Card>
	);
};
