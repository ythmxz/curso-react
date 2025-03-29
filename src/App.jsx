import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import {v4} from "uuid";

function App() {

	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

	function onAddTaskSubmit(title, description) {

		const newTask = {

			id: v4(),
			title,
			description,
			isCompleted: false,

		};

		setTasks([...tasks, newTask]);

	}

	useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks])

	function onTaskClick(taskId) {

		const newTasks = tasks.map((task) => {

			if (task.id === taskId) {
				return { ...task, isCompleted: !task.isCompleted };
			}

			return task;

		});

		setTasks(newTasks);

	}

	function onDeleteTaskClick(taskId) {

		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);

	}

	return (

		<div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">

			<div className="w-[500px] space-y-4">

				<Title>Gerenciador de Tarefas</Title>

				<AddTask onAddTaskSubmit={onAddTaskSubmit}/>
				<Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>

			</div>

		</div>

	);

}

export default App;
