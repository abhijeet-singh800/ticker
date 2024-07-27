import NameForm from '@src/components/NameForm'
import { TaskListObj, TaskObj } from '@src/utils/data'
import '@src/main.css'

export default function Onboard(props: { setTaskList: (obj: TaskListObj[]) => void, setOriginal: (obj: TaskObj[]) => void }) {
    return (
        <div className='flex-col align-middle justify-center'>
            <div className='text-cWhite font-poppins text-[75px] px-3 mt-10 text-center'>Onboarding</div>
            <NameForm onboard='true' setOriginal={props.setOriginal} setTaskList={props.setTaskList} />
        </div>
    )
}
