import { Card } from "react-bootstrap";
import { FC } from "../types";
export interface ChatItemProps {
	label: string;
	did: string;
}
export const ChatItem: FC<ChatItemProps> = ({ label, did }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{label}</Card.Title>
				<Card.Text>{did}</Card.Text>
			</Card.Body>
		</Card>
	);
};
