import './TaskList.css'
import { StringBolFunc, StringFunc, TaskItemType } from '../model'
import TaskItem from './TaskItem'

type TaskListProps = {
    title: string,
    isCompleted: boolean,
    taskList: TaskItemType[] | undefined,
    handleDeleteTask: StringBolFunc,
    handleFinishTask:StringFunc
}

const TaskList = ({ title, isCompleted, taskList, handleDeleteTask, handleFinishTask }: TaskListProps) => {
    return (
        <div className='task-list-container'>
            <div className={`task-list-title ${isCompleted ? ' completed' : ''}`}>{title}</div>
            <div className='task-list-list'>
                {taskList && taskList?.length !== 0 ? taskList.map(task => {
                    return <TaskItem handleDeleteTask={handleDeleteTask} handleFinishTask={handleFinishTask} title={task.title} date={task.date} isCompleted={task.isCompleted} />
                }) : <p>No Task</p>}
            </div>
        </div>
    )
}

export default TaskList