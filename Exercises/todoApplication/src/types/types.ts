type ClearTaskType = {handleClear: () => void}

type TaskCardType = { 
    id: number
    isCompleted: boolean
    text: string
    onDelete: (id: number) => void 
    handleChange: (id: number) => void 
}

export type { ClearTaskType, TaskCardType }