import TaskForm from '@src/components/TaskForm'
import { TaskObj } from '@src/utils/data'
import '@src/main.css'

export default function Task(props: { original: TaskObj[], setOriginal: (obj: TaskObj[]) => void }) {
    // const { taskId } = useParams()
    return (
        <div>
            <h1 className='text-cWhite font-poppins text-5xl p-3'>Update Task</h1>
            <TaskForm new='false' original={props.original} setOriginal={props.setOriginal} />
        </div>
    )
}
