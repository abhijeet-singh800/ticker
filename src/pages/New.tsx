import TaskForm from '@src/components/TaskForm'
import { TaskObj } from '@src/utils/data'
import '@src/main.css'

export default function New(props: { original: TaskObj[], setOriginal: (obj: TaskObj[]) => void }) {
    return (
        <div>
            <h1 className='text-cWhite font-poppins text-5xl p-3'>Create a New Task</h1>
            <TaskForm new='true' original={props.original} setOriginal={props.setOriginal} />
        </div>
    )
}
