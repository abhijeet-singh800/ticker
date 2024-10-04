import { Button } from "@src/shadcn/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { TaskListObj, TaskObj } from '@src/utils/data'





export default function FormPanel(props: { onboard: string, setOriginal: (obj: TaskObj[]) => void, setTaskList: (obj: TaskListObj[]) => void }) {
    const onboard: string = props.onboard
    const navigate = useNavigate()

    function del_all() {
        props.setOriginal([])
        props.setTaskList([])
        navigate('/')
    }

    if (onboard == 'true') {
        return (
            <div className='flex w-full justify-center mt-24'>
                <Button type="submit" className='w-60'>Next</Button>
            </div>
        )
    } else {
        return (
            <div className='flex w-full justify-center mt-28'>
                <Button data-cy="nameform-delete-button" onClick={del_all} className='m-2' type='button'>Delete All Data</Button>
                <Button data-cy="nameform-update-button" type="submit" className='m-2'>Update Settings</Button>
            </div>
        )
    }
}
