import { useState } from 'react'
import { TaskItemType as TaskItem } from '../model'

const useTask = () => {
    const [taskList, setTaskList] = useState<TaskItem[]>([])
    const [taskListCompleted, setTaskListCompleted] = useState<TaskItem[]>([])

    const handleAddTask = (title: string) => {
        const toAdd: TaskItem = {
            title,
            date: new Date(),
            isCompleted: false
        }
        setTaskList([...taskList, toAdd])
    }

    const handleDeleteTask = (title: string, isCompleted: boolean) => {
        if (!isCompleted) {
            setTaskList(prevTaskList => prevTaskList.filter(task => {
                return task.title !== title
            }))
        } else {
            setTaskListCompleted(prevTaskList => prevTaskList.filter(task => {
                return task.title !== title
            }))
        }
    }

    const handleFinishTask = (title: string) => {
        const findItem = taskList.find(task => {
            return task.title === title
        })!

        setTaskList(prevTaskList => prevTaskList.filter(task => {
            return task.title !== title
        }))
        setTaskListCompleted([...taskListCompleted, {...findItem, isCompleted:true}])
    }

    return [{ taskList, taskListCompleted }, { handleAddTask, handleDeleteTask, handleFinishTask }]
}

export default useTask