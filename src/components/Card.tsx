import { MouseEvent } from 'react'
import { EllipsisVertical } from 'lucide-react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@src/shadcn/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@src/shadcn/components/ui/dropdown-menu"
import { updatedTask, deleteTask } from '@src/utils/utils'
import { TaskObj } from '@src/utils/data'
import { Link } from 'react-router-dom'




export default function Cards(props: { Array: TaskObj[], original: TaskObj[], set: (obj: TaskObj[]) => void }) {


    function Complete(id: string, completed: boolean, event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        let value = ''
        if (completed == true) {
            value = 'false'
        } else {
            value = 'true'
        }
        updatedTask(props.original, props.set, id, 'completed', value)
    }

    function Star(id: string, stared: boolean, event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        let value = ''
        if (stared == true) {
            value = 'false'
        } else {
            value = 'true'
        }
        updatedTask(props.original, props.set, id, 'stared', value)
    }

    function Delete(id: string, event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        deleteTask(props.original, props.set, [id])
    }

    const cardsData = props.Array.map((item: TaskObj) => {
        return (

            <div key={item.id} data-cy="card" id={item.id} className='z-0'>
                <div className='float-right -translate-x-10 translate-y-6'>
                    <DropdownMenu  >
                        <DropdownMenuTrigger className='mt-2 z-10' data-cy="card-drop" id={item.id}><EllipsisVertical /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={(event) => Complete(item.id, item.completed, event)}>{item.completed == true ? 'Mark as Pending' : 'Mark as Completed'}</DropdownMenuItem>
                            <DropdownMenuItem onClick={(event) => Star(item.id, item.stared, event)}>{item.stared == true ? 'Remove the Star' : 'Mark as Stared'}</DropdownMenuItem>
                            <DropdownMenuItem onClick={(event) => Delete(item.id, event)}>Delete this Task</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link to={'/task/' + item.id}>
                    <Card>
                        <CardHeader>
                            <div className='flex'>
                                <div className='w-[470px]'>
                                    <CardTitle>
                                        {item.title}
                                    </CardTitle>
                                </div>

                            </div>
                        </CardHeader>
                        <CardContent>
                            {item.notes}
                        </CardContent>
                    </Card>
                </Link>
            </div>
        )
    })

    return (
        <div>
            {cardsData}
        </div>
    )
}
