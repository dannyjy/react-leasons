import { useEffect, useState } from "react"
import ClearTask from "./ClearTask";
import TaskCard from "./TaskCard";


type TaskType = {id: number, isComplete: boolean,text: string}

const AddTodo = () => {
    const [todo, setTodo] = useState<TaskType[]>(JSON.parse(localStorage.getItem("tasks") as string) ?? []);

    function getData(formData: FormData){
        const { task } = Object.fromEntries(formData)
        if(task === null || task === '') return;
        setTodo((tasks) => [...tasks, { id: tasks.length + 1, isComplete: false, text: task.toString() }])
    }

    function removeAllTasks(){
        setTodo([])
    }

    function deleteTask(id: number){
        setTodo(prevTask => prevTask.filter(t => t.id !== id))
    }

    function UpdateCompleted(id: number){
        setTodo(prevTask => prevTask.map((t) => {
            return t.id === id ? {...t,isComplete: !t.isComplete} : t
        }))
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todo))
    }, [todo])  

  return (
    <div className="flex flex-col items-center"> 
        <h1 className="text-5xl font-bold text-gray-400 py-16">Task Tracker</h1>
        <form action={getData} className="flex gap-2">
            <input type="text" name="task" placeholder="Enter your task" className="flex-2 bg-gray-100 border-2 rounded-xl border-[#d1d5db] py-1.5 px-2.5 min-w-96" />
            <button className="bg-black px-6 py-2 text-white rounded-xl cursor-pointer">+ Add</button>
        </form>
        <ul className="flex flex-col w-full py-8 gap-5">
        {
            todo.map((t) => {
                return <TaskCard 
                            key={t.id}
                            id={t.id}
                            handleChange={UpdateCompleted}
                            onDelete={deleteTask}
                            isCompleted={t.isComplete} 
                            text={t.text}
                        />
            }).reverse()
        }
        </ul>
        {todo.length > 0 && <ClearTask handleClear={removeAllTasks}/>}
    </div>
  )
}

export default AddTodo