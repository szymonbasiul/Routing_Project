import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { todoListRoute } from "./pages/TodosList";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
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
				],
			},
			{
				path: "users",
				children: [
					{
						index: true,
						...userListRoute,
					},
					{ path: ":userId", element: <h1>User</h1> },
				],
			},
			{
				path: "todos",
				children: [
					{
						index: true,
						...todoListRoute,
					},
					{ path: ":todoId", element: <h1>Todo</h1> },
				],
			},
		],
	},
]);
