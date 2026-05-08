import { useSelector, useDispatch } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"

const TaskManagerPage = () => {
	const tasks = useSelector((state: RootState) => state.task.tasks)
	const dispatch = useDispatch<AppDispatch>()

	function handleAdd(formDate: FormData) {
		const todo = formDate.get("todo") as FormDataEntryValue
		if(todo === "") return
		dispatch({ type: "ADD_TODO", payload:  { text: todo.toString().trim(), id: null}})
	}

	return (
		<>
			<nav className="sticky top-0 bg-gray-900 p-4 text-gray-200">
				<h1 className="text-2xl font-medium">TaskManager</h1>
			</nav>
			<section className="p-4">
				<form action={handleAdd} className="flex flex-row items-center justify-center gap-2">
					<input type="text" name="todo" className="text-gray-950 w-full border-2 border-gray-200 rounded-sm p-1 bg-none focus:outline-2 focus:outline-gray-200"/>
					<button className="cursor-pointer bg-black rounded-md px-5 py-2 text-gray-200">Add</button>
				</form>
				<ul>
					{
						tasks.map(task => (
							<li>{task.todo}</li>
						)).reverse()
					}
				</ul>
			</section>
		</>
	)
}

export default TaskManagerPage