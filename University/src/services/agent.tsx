import axios from "axios";
const hostname = process.env.REACT_APP_UNIVERSITY_AGENT_HOST || "localhost";
const port = 8021;
const baseUrl = hostname;
console.log("Agent is running on: ", `http://${hostname}:${port}`);

export const getConnections = () => {
	return axios.get(`${baseUrl}/connections`);
};
export const removeConnection = (id: string) => {
	return axios.post(`${baseUrl}/connections/${id}/remove`);
};
export const createInvitation = () => {
	return axios.post(`${baseUrl}/connections/create-invitation?multi_use=true`);
};
export const recieveInvitation = (invitation: any) => {
	return axios.post(`${baseUrl}/connections/recieve-invitation`, invitation);
};
export const getSchemas = () => {
	return axios.get(`${baseUrl}/schemas/created`);
};
export const getSchema = (id: string) => {
	return axios.get(`${baseUrl}/schemas/${id}`);
};
export const getCredentialDefinitions = () => {
	return axios.get(`${baseUrl}/credential-definitions/created`);
};
export const getCredentialDefinition = (id: string) => {
	return axios.get(`${baseUrl}/credential-definitions/${id}`);
};
export const sendCredential = (credential: any) => {
	return axios.post(`${baseUrl}/issue-credential/send`, credential);
};
const agent = {
	getConnections,
	removeConnection,
	createInvitation,
	recieveInvitation,
	getSchemas,
	getSchema,
	getCredentialDefinitions,
	getCredentialDefinition,
	sendCredential,
};
export default agent;
