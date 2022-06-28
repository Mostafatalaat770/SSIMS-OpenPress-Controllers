import "./App.css";
import { AppRouter } from "./router/app";
import { FC } from "./types";
export const App: FC = () => {
	console.log(process.env.REACT_APP_UNIVERSITY_AGENT_HOST);

	return (
		<div className="App">
			<AppRouter />
		</div>
	);
};

export default App;
