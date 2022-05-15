import { QRCodeSVG } from "qrcode.react";

export const Home = () => {
	const connectionJson = {
		connection_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		invitation: {
			"@type":
				"did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/my-family/1.0/my-message-type",
			serviceEndpoint: "http://192.168.56.101:8020",
			did: "WgWxqztrNooG92RXvxSTWv",
			recipientKeys: ["H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"],
			routingKeys: ["H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"],
			label: "Bob",
			"@id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
			imageUrl: "http://192.168.56.101/img/logo.jpg",
		},
		invitation_url:
			"http://192.168.56.101:8020/invite?c_i=eyJAdHlwZSI6Li4ufQ==",
	};

	return (
		<div>
			<h1>Home</h1>
			<p>In order to join our network, please scan this QR code</p>
			{<QRCodeSVG value={JSON.stringify(connectionJson)} />}
		</div>
	);
};
