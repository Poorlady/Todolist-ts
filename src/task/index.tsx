import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './index.css'
import useTask from './components/useTask'

const Taskify = () => {
    const [dataState, handler] = useTask()
    const {taskList, taskListCompleted} = dataState
    const {handleAddTask, handleDeleteTask, handleFinishTask} = handler


    return (
        <>
            <div className='taskify-title'>Taskify App</div>
            <TaskForm handleAddTask={handleAddTask!}/>
            <div className='taskify-container'>
                <TaskList handleDeleteTask={handleDeleteTask!} handleFinishTask={handleFinishTask!} isCompleted={false} title='Task List' taskList={taskList}/>
                <TaskList handleDeleteTask={handleDeleteTask!} handleFinishTask={handleFinishTask!} isCompleted={true} title='Completed Task' taskList={taskListCompleted}/>
            </div>
        </>
    )
}

export default Taskify