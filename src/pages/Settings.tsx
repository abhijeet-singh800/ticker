import '@src/main.css'
import NameForm from '@src/components/NameForm'
import { TaskListObj, TaskObj } from '@src/utils/data'

export default function Settings(props: { setOriginal: (obj: TaskObj[]) => void, setTaskList: (obj: TaskListObj[]) => void }) {
    return (
        <div>
            <div className='text-cWhite font-poppins text-8xl p-3'>Settings</div>
            <NameForm onboard='false' setOriginal={props.setOriginal} setTaskList={props.setTaskList} />
        </div>
    )
}
