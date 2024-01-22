import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

const PostList = () => {
	const posts = useLoaderData();
	return (
		<>
			<h1 className="page-title">Posts</h1>
			<div className="card-grid">
				{posts.map((post) => (
					<div key={post.id} className="card">
						<div className="card-header">{post.title}</div>
						<div className="card-body">
							<div className="card-preview-text">{post.body}</div>
						</div>
						<div className="card-footer">
							<Link className="btn" to={post.id.toString()}>
								View
							</Link>
						</div>
					</div>
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
