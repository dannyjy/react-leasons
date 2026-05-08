export interface ButtonProp {
    style: string
    text: string;
    onButtonClick: () => void
}

export interface CounterState {
    count: number
}

export interface CounterAction {
    type: "INCREMENT" | "DECREMENT"
}

export interface Task {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export interface TaskAction {
  type: "ADD_TODO" | "REMOVE_TODO" | "TOGGLE_TODO";
  payload?: { text: string; id: number | null };
}