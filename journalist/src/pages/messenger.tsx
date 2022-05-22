import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChatContainer } from "../Components/ChatContainer";
import { ChatItem } from "../Components/ChatItem";

const chatData = [
	{
		label: "Alice",
		did: "did:sov:2wJ5mHreBBH2a9LQp2ytHoeZt4NqPypQzfvfvb",
	},
	{
		label: "Bob",
		did: "did:sov:s2S1aAWeBBH2a9LQp2ytHoeZt4NqPypQzfvfvb",
	},
	{
		label: "Charlie",
		did: "did:sov:3wJ5mHreBBH2a9LQp2ytHoeZt4NqPypQzfvfvb",
	},
];

export const Messenger = () => {
	const [chats, setChats] = useState<
		{
			label: string;
			did: string;
		}[]
	>([]);
	const [activeChat, setActiveChat] = useState<number | undefined>(undefined);

	useEffect(() => {
		// TODO: fetch active connections
		setChats(chatData);
	}, []);
	const chatItemList = chatData.map((chat, index) => (
		<div
			key={chat.did}
			onClick={() => setActiveChat(index)}
			style={{ cursor: "pointer" }}
		>
			<ChatItem label={chat.label} did={chat.did} />
		</div>
	));
	const chatContainerList = chats.map(
		(chat, index) =>
			activeChat === index && (
				<ChatContainer key={index} label={chat.label} did={chat.did} />
			)
	);
	return (
		<Container>
			<h1>Messenger</h1>
			<Row>
				<Col md={4}>{chatItemList}</Col>
				<Col md={8}>{chatContainerList}</Col>
			</Row>
		</Container>
	);
};
