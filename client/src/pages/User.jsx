import { useLoaderData } from "react-router-dom";
import { getUser } from "../api/users";
import { getTodos } from "../api/todos";
import { getPosts } from "../api/posts";
import { PostCard } from "../components/PostCard";
import { TodoItem } from "../components/TodoItem";

const User = () => {
	const { user, posts, todos } = useLoaderData();
	return (
		<>
			<h1 className="page-title">{user.name}</h1>
			<div className="page-subtitle">{user.email}</div>
			<div>
				<b>Company: </b>
				{user.company.name}
			</div>
			<div>
				<b>Website: </b>
				{user.website}
			</div>
			<div>
				<b>Address: </b>
				{user.address.street} {user.address.suite} {user.address.city}{" "}
				{user.address.zipcode}
			</div>
			<h3 className="mt-4 mb-2">Posts</h3>
			<div className="card-grid">
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</div>
			<h3 className="mt-4 mb-2">Todos</h3>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	);
};

const loader = async ({ request: { signal }, params: { userId } }) => {
	const posts = getPosts(userId, { signal });
	const todos = getTodos(userId, { signal });
	const user = getUser(userId, { signal });

	return { posts: await posts, todos: await todos, user: await user };
};

export const userRoute = {
	loader,
	element: <User />,
};
