export const TodoItem = ({ completed, title }) => {
	return <li className={completed ? "strike-through" : ""}>{title}</li>;
};
