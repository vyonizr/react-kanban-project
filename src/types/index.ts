import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '../constants/app'
export interface CSSProperties {
  [key: string]: React.CSSProperties
}

export interface Task {
  id: number
  title: string
  detail: string
  dueDate: string
  progressOrder: TaskProgressId
}

export type TaskProgressStatus = typeof TASK_PROGRESS_STATUS[keyof typeof TASK_PROGRESS_STATUS]

export type TaskProgressId = typeof TASK_PROGRESS_ID[keyof typeof TASK_PROGRESS_ID]
