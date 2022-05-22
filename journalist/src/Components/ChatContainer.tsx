import { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { FC } from "../types";
export interface ChatContainerProps {
	label: string;
	did: string;
}
export const ChatContainer: FC<ChatContainerProps> = ({ label, did }) => {
	const [message, setMessage] = useState<string>(``);
	const [messages, setMessages] = useState<string[]>([]);
	const onSend = () => {
		setMessages([...messages, message]);
		setMessage("");
	};
	return (
		<Card>
			<Card.Header>
				<Card.Title>{label}</Card.Title>
				<Card.Text>{did}</Card.Text>
			</Card.Header>
			<Card.Body>
				{messages.map((message, index) => (
					<Card.Text key={index}>{message}</Card.Text>
				))}
			</Card.Body>
			<Card.Footer>
				<InputGroup>
					<FormControl
						placeholder="enter message..."
						value={message}
						onChange={({ target }) => setMessage(target.value)}
					/>
					<Button variant="primary" onClick={onSend}>
						Send
					</Button>
				</InputGroup>
			</Card.Footer>
		</Card>
	);
};
