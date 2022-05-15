import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import articlesData from "../data/articles.json";
export const Articles = () => {
	const articles = articlesData.map((article) => (
		<Card key={article.id}>
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Card.Text>{article.content}</Card.Text>
				<Button variant="primary">
					<Link to={`${article.id}`}>Read More...</Link>
				</Button>
			</Card.Body>
		</Card>
	));
	return (
		<div>
			<h1>Articles</h1>
			<div className="articles">{articles}</div>
		</div>
	);
};
