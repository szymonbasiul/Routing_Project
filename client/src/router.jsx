import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { todoListRoute } from "./pages/TodosList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { newTodoRoute } from "./pages/NewTodo";
import { newPostRoute } from "./pages/NewPost";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Navigate to={"/posts"} /> },
					{
						path: "posts",
						children: [
							{
								index: true,
								...postListRoute,
							},
							{ path: ":postId", ...postRoute },
							{ path: "new", ...newPostRoute },
						],
					},
					{
						path: "users",
						children: [
							{
								index: true,
								...userListRoute,
							},
							{ path: ":userId", ...userRoute },
						],
					},
					{
						path: "todos",
						children: [
							{
								index: true,
								...todoListRoute,
							},
							{ path: ":todoId", element: <h1>Todo Element</h1> },
							{ path: "new", ...newTodoRoute },
						],
					},
					{ path: "*", element: <h1>404 - Page not found</h1> },
				],
			},
		],
	},
]);

function ErrorPage() {
	const error = useRouteError();

	return (
		<>
			<h1>Error - Something went wrong</h1>;
			{import.meta.env.MODE !== "production" && (
				<>
					<pre>{error.message}</pre>
					<pre>{error.stack}</pre>
				</>
			)}
		</>
	);
}
