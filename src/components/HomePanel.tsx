import { Link } from 'react-router-dom'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@src/shadcn/components/ui/select"
import { Button } from "@src/shadcn/components/ui/button"
import { TaskListObj } from '@src/utils/data'
import { useNavigate } from 'react-router-dom'
import '@src/main.css'




export default function HomePanel(props: { setFilter: (data: string) => void, setList: (data: string) => void, taskList: TaskListObj[] }) {

    const data = props.taskList
    const idArray: string[] = []
    const nameArray: string[] = []
    const Item = []
    const navigate = useNavigate()

    function HandleTask(value: string) {
        if (value != 'new') {
            props.setList(value)
        } else {
            navigate('/list')
        }
    }

    function HandleFilter(value: string) {
        props.setFilter(value)
    }

    data.forEach((element: TaskListObj) => {
        idArray.push(String(element.id))
        nameArray.push(element.title)
    })
    for (let i = 0; i < data.length; i++) {
        Item.push(<SelectItem key={i} value={idArray[i]}>{nameArray[i]}</SelectItem>)
    }
    Item.push(<SelectItem key='new' value='new'>Add a New Task List</SelectItem>)

    return (
        <div className='p-2 flex flex-col'>
            <div className='m-2'>
                <Select onValueChange={HandleTask}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a Task List" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="all">Show All Lists</SelectItem>
                        {Item}
                    </SelectContent>
                </Select>
            </div>

            <div className='flex w-auto'>
                <div className='m-2 w-1/2'>
                    <Link to='/settings'>
                        <Button>Settings</Button>
                    </Link>
                </div>

                <div className='m-2 w-1/2'>
                    <Select onValueChange={HandleFilter}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">No Filters Applied</SelectItem>
                            <SelectItem value="star">Only Show Starred</SelectItem>
                            <SelectItem value="comp">Only Show Completed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
