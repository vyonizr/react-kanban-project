export interface CSSProperties {
  [key: string]: React.CSSProperties
}

export interface Task {
  id: number
  title: string
  detail: string
  dueDate: string
  progressOrder: 1 | 2 | 3 | 4
}
