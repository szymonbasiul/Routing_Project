import { useLoaderData } from "react-router-dom";
import { getPost } from "../api/posts";

const Post = () => {
	const post = useLoaderData();
	return (
		<>
			<h1 className="page-title">{post.title}</h1>
			<div>{post.body}</div>
		</>
	);
};

const loader = ({ request: { signal }, params }) => {
	return getPost(params.postId, { signal });
};

export const postRoute = {
	loader,
	element: <Post />,
};
