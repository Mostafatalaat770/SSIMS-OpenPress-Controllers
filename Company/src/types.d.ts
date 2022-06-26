export interface FC<P = {}> {
	(props: P, context?: any): ReactElement<any, any> | null;
}
