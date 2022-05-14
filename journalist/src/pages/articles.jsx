import { Link } from "react-router-dom";
import articlesData from "../data/articles.json";
export const Articles = () => {
	const articles = articlesData.map((article) => (
		<div key={article.id}>
			<h1>
				<Link to={`${article.id}`}>{article.title}</Link>
			</h1>
			<p>{article.content}</p>
		</div>
	));
	return (
		<div>
			<h1>Articles</h1>
			<div>{articles}</div>
		</div>
	);
};
