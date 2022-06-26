export interface IConnection {
	initiator?: string;
	invitation_key?: string;
	routing_state?: string;
	my_did?: string;
	state?: string;
	connection_id?: string;
	request_id?: string;
	their_role?: string;
	their_label?: string;
	alias?: string;
	error_msg?: string;
	inbound_connection_id?: string;
	accept?: string;
	invitation_mode?: string;
	their_did?: string;
	created_at?: string;
	updated_at?: string;
}
