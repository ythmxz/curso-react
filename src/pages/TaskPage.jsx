import Title from "../components/Title";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const title = searchParams.get("title");
	const description = searchParams.get("description");

	return(

		<div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">

			<div className="w-[500px] space-y-4">

				<div className="flex justify-center relative mb-6">

					<button
						onClick={() => navigate(-1)}
						className="absolute left-0 top-0 bottom-0 text-white"
					>
						<ChevronLeftIcon/>
					</button>

				</div>

				<Title>Detalhes da Tarefa</Title>

				<div className="bg-zinc-700 p-4 rounded-md">

					<h2 className="text-xl text-white font-bold">{title}</h2>
					<p className="text-white">{description}</p>

				</div>

			</div>

		</div>

	);

}

export default TaskPage;
