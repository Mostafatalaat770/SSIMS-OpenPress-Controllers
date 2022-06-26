import "./App.css";
import { AppRouter } from "./router/app";
import { FC } from "./types";
export const App: FC = () => {
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
};

export default App;
