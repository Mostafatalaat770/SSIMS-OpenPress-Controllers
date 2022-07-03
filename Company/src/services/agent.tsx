import axios from "axios";
const hostname = process.env.ACME_AGENT_HOST || "localhost";
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
export const getProofRequests = () => {
	return axios.get(`${baseUrl}/present-proof/records`);
};
export const sendProofRequest = (proofRequest: any) => {
	return axios.post(`${baseUrl}/present-proof/send-request`, proofRequest);
};
const agent = {
	getConnections,
	removeConnection,
	createInvitation,
	recieveInvitation,
	getProofRequests,
	sendProofRequest,
};
export default agent;
