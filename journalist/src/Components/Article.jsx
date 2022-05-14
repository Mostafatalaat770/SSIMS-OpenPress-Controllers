import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";
export const Article = () => {
	const { id } = useParams();

	const article = articlesData.find((article) => article.id === id);
	return (
		<div>
			<h1>{article.title}</h1>
			<p>{article.content}</p>
		</div>
	);
};
