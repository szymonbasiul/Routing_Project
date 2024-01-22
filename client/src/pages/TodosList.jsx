import { Link, useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";

const TodoList = () => {
	const todos = useLoaderData();
	return (
		<>
			<h1 className="page-title">Todos</h1>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<Link
								to={todo.id.toString()}
								className={todo.completed ? "strike-through" : ""}
							>
								{todo.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

const loader = ({ request: { signal } }) => {
	return getTodos({ signal });
};

export const todoListRoute = {
	loader,
	element: <TodoList />,
};
