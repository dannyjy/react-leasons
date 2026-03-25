import { type TaskCardType } from "../types/types"
import deleteImage from "../assets/delete.svg"

const TaskCard = ({ id, isCompleted, text, onDelete, handleChange }: TaskCardType) => {
    return (
        <div className="flex items-center justify-between ">
            <section className="flex gap-4 ">
                <input type="checkbox" name="completed" id="completed" title='completed' onChange={() => handleChange(id)}/>
                <span className={`${isCompleted ? 'line-through' : null}`}>{text}</span>
            </section>
            <div className={`rounded-full bg-white p-1 cursor-pointer`} onClick={() => onDelete(id)}>
                <img src={deleteImage} alt="Trash Icon" className='w-5 h-5'/>
            </div>
        </div>
    )
}


export default TaskCard