import './TaskItem.css'
import { StringBolFunc, StringFunc, TaskItemType } from '../model'

interface TaskItemProps extends TaskItemType {
    handleDeleteTask: StringBolFunc,
    handleFinishTask:StringFunc
}

const TaskItem = ({ title, date, isCompleted, handleDeleteTask, handleFinishTask }: TaskItemProps) => {
    return (
        <div className='task-item'>
            <div>
                <div className='task-item-title'>{title}</div>
                <div className='task-item-date'>{date.getFullYear()}</div>
            </div>
            <div className='task-item-actions'>
                {!isCompleted ?
                    <>
                        <button className='finishBtn' onClick={() => handleFinishTask(title)}>Finish</button>
                        <button className='delBtn' onClick={()=>handleDeleteTask(title, isCompleted)}>Delete</button>
                    </> :  <button className='delBtn' onClick={()=>handleDeleteTask(title, isCompleted)}>Delete</button>
                }
            </div>
        </div>
    )
}

export default TaskItem