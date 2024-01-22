import { useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import { PostCard } from "../components/PostCard";

const PostList = () => {
	const posts = useLoaderData();
	return (
		<>
			<h1 className="page-title">Posts</h1>
			<div className="card-grid">
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</div>
		</>
	);
};

const loader = ({ request: { signal } }) => {
	return getPosts({ signal });
};

export const postListRoute = {
	loader,
	element: <PostList />,
};
