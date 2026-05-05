
interface Todo {
    id: number;
    task: string;
    isCompleted: boolean
}

interface TodoState {
    todo: Todo[]
}

interface TodoAction {
    type: "ADD_TODO" | "REMOVE_TODO"
}

const initialTodoState: TodoState = { todo: []}

export function todoReducer(state = initialTodoState, action: TodoAction) {
     switch(action.type){
        case "ADD_TODO": {
            return state
        }
        case "REMOVE_TODO": {
            return state
        }
        default:
            return state
    }
}