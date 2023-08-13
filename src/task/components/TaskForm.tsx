import React, { useState } from 'react'
import './TaskForm.css'
import { StringFunc } from '../model'

type TaskFormType = {
    handleAddTask: StringFunc
}

const TaskForm = (props: TaskFormType) => {
    const [title, setTitle] = useState('')

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const hanldeSubmit = (title:string) => {
        props.handleAddTask(title)
        setTitle('')
    }

    return (
        <div className='form-container'>
            <input value={title} onChange={handleTitle} name='task' placeholder='Add New Task' />
            <button onClick={() => hanldeSubmit(title)}>Submit</button>
        </div>
    )
}

export default TaskForm