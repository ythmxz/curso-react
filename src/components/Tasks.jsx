import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

	const navigate = useNavigate();

	function onSeeDetailsClick(task) {

		const query = new URLSearchParams();

		query.set("title", task.title);
		query.set("description", task.description);

		navigate(`/task?${query.toString()}`);

	}

	return(

		<ul className="space-y-4 p-6 bg-zinc-700 rounded-md shadow">

			{tasks.map((task) => (

				<li key={task.id} className="flex gap-2">

					<button
						onClick={() => onTaskClick(task.id)}
						className={`bg-zinc-800 w-full text-left text-white p-2 rounded-md
							${task.isCompleted && "line-through"}`}
					>
						{task.title}
					</button>

					<Button
						onClick={() => onSeeDetailsClick(task)}
					>
						<ChevronRightIcon />
					</Button>

					<Button
						onClick={() => onDeleteTaskClick(task.id)}
					>
						<TrashIcon />
					</Button>

				</li>

			))}

		</ul>

	);

}

export default Tasks;
