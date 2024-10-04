import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@src/shadcn/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@src/shadcn/components/ui/select"

import { Textarea } from "@src/shadcn/components/ui/textarea"
import { Button } from '@src/shadcn/components/ui/button'
import { getTaskList } from '@src/utils/local'
import { TaskObj } from '@src/utils/data'
import { useParams } from 'react-router-dom'
import '@src/main.css'
import { useNavigate } from 'react-router-dom'
import { taskObject, createTask, updatedTaskForm } from '@src/utils/utils'


const formSchema = z.object({
    title: z.string().min(1, {
        message: "Please Enter the Title",
    }),
    notes: z.string().nullable(),
    taskList: z.string().min(1, {
        message: "Please Select a Task List"
    })
})

type FormFields = z.infer<typeof formSchema>


export default function TaskForm(props: { new: string, original: TaskObj[], setOriginal: (obj: TaskObj[]) => void }) {

    let taskId: string
    const data = getTaskList()
    const idArray: string[] = []
    const nameArray: string[] = []
    const Item: React.ReactNode[] = []
    const navigate = useNavigate()
    let element: TaskObj
    let default_title: string
    let default_note: string | null
    let default_task: string

    if (props.new != 'true') {
        taskId = useParams().taskId ?? ''
        element = taskObject(props.original, taskId)
        default_title = element.title
        default_note = element.notes
        default_task = element.listId

    }

    data.forEach((element: TaskObj) => {
        idArray.push(String(element.id))
        nameArray.push(element.title)
    })
    for (let i = 0; i < data.length; i++) {
        Item.push(<SelectItem key={i} value={idArray[i]}>{nameArray[i]}</SelectItem>)
    }

    function default_values() {
        if (props.new == 'true') {
            return (
                { resolver: zodResolver(formSchema), }
            )
        } else {
            return (
                {
                    resolver: zodResolver(formSchema),
                    defaultValues: {
                        title: default_title,
                        notes: default_note,
                        taskList: default_task
                    },
                }
            )
        }
    }

    const form = useForm<FormFields>(default_values())

    function onSubmit(values: FormFields) {
        if (props.new == 'true') {
            createTask(props.original, props.setOriginal, values.title, values.notes, values.taskList)
            navigate('/')
        } else {
            updatedTaskForm(props.original, props.setOriginal, taskId, values.title, values.notes, values.taskList)
            navigate('/')
        }
    }

    return (
        <div className='p-3'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className='hidden'>Enter you Form Title</FormLabel>
                                <FormControl>
                                    <Textarea data-cy="newform-title-input" placeholder="Type your Task Titile." {...field} className='text-xl' />
                                </FormControl>
                                <FormMessage data-cy="newform-title-message" className='text-center' />
                            </FormItem>
                        )}
                    />
                    <div className='ml-32 mr-32 my-3' data-cy="newform-list-div">
                        <FormField
                            control={form.control}
                            name="taskList"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='hidden'>Select a Task List</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={default_task}>
                                        <FormControl >
                                            <SelectTrigger className='w-80' >
                                                <SelectValue placeholder="No Task List Selected" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {Item}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage data-cy="newform-list-message" className='text-center' />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className='hidden'>Enter you Task Notes</FormLabel>
                                <FormControl>
                                    <Textarea data-cy="newform-desc-input" placeholder="Type your Task Notes." value={field.value ?? ''} onChange={field.onChange} className='h-72 text-lg' />
                                </FormControl>
                                <FormMessage data-cy="newform-desc-message" className='text-center' />
                            </FormItem>
                        )}
                    />


                    <div className='ml-32 my-3'>
                        <Button data-cy="newform-button-save" type="submit" className='w-80' >Save</Button>
                    </div>


                </form>
            </Form>
        </div >
    )
}
