import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { CredentialCard } from "../Components/CrednetialCard";
const creds = [
	{
		referent: "59d493d0-7f8d-46cb-ab7f-86e28fd601b6",
		attrs: {
			name: "Alice Smith",
			degree: "Maths",
			date: "2020-01-01",
			age: "24",
		},
		schema_id: "VvHsnLRLwrgPrKWW6GYifH:2:degree schema:25.53.85",
		cred_def_id: "VvHsnLRLwrgPrKWW6GYifH:3:CL:139510:default",
		rev_reg_id: null,
		cred_rev_id: null,
	},
	{
		referent: "59d493d0-7f8d-46cb-ab7f-86e28fd601b6",
		attrs: {
			name: "Alice Smith",
			degree: "Maths",
			date: "2020-01-01",
			age: "24",
		},
		schema_id: "VvHsnLRLwrgPrKWW6GYifH:2:degree schema:25.53.85",
		cred_def_id: "VvHsnLRLwrgPrKWW6GYifH:3:CL:139510:default",
		rev_reg_id: null,
		cred_rev_id: null,
	},
];
export const Credentials = () => {
	const [credentials, setCredntials] = useState<any | null>(null);
	useEffect(() => {
		// TODO: fetch credentials from aires agent
		setCredntials(creds);
	}, []);
	if (!credentials) return <div>loading...</div>;
	return (
		<Container>
			<CardGroup>
				{credentials.map((c: any, index: number) => (
					<CredentialCard key={index} {...c} attributes={c.attrs} />
				))}
			</CardGroup>
		</Container>
	);
};
