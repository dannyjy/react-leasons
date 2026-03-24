type PodType = {
    id: number
    color: string
    on: boolean
}

type PodElementType = {
    handlePodOn: (id: number) => void
    id: number
    color: string
    on: boolean
}

export type { PodType, PodElementType} 