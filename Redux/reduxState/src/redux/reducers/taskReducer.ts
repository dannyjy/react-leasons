import type { TaskAction, TaskState  } from "../../types/types";

const initialTodoState: TaskState = { tasks: [] };

export function tasksReducer(state: TaskState = initialTodoState, action: TaskAction) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), todo: action.payload?.text, isCompleted: false },
        ],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload?.id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload?.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task,
        ),
      };
    default:
      return state;
  }
}
