import { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

export const ChatContainer = ({ label, did }) => {
	const [message, setMessage] = useState(null);
	const [messages, setMessages] = useState([]);
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
				{messages.map((message) => (
					<Card.Text key={message}>{message}</Card.Text>
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
