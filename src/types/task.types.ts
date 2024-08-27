import { IRoot } from "./root.types"

export enum EnumTaskPriority {
	Low = 'low',
	medium = 'medium',
	high = 'high'
}

export interface ITaskResponse extends IRoot{
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
