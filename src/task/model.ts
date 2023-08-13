export interface TaskItemType {
  title: string
  date: Date
  isCompleted: boolean
}

export type StringFunc = (title:string) => void

export type StringBolFunc = (a:string, b:boolean) => void