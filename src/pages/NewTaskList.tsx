import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from 'react-router-dom'
import { Button } from "@src/shadcn/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@src/shadcn/components/ui/form"
import { Input } from "@src/shadcn/components/ui/input"
import { TaskListObj } from '@src/utils/data'
import { createTaskList } from '@src/utils/utils'

const formSchema = z.object({
    listname: z.string().min(2, {
        message: "List Name must be at least 2 characters.",
    }),
})

type FormFields = z.infer<typeof formSchema>

export default function NewTaskList(props: { taskList: TaskListObj[], setTaskList: (obj: TaskListObj[]) => void }) {
    const navigate = useNavigate()

    const form = useForm<FormFields>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: FormFields) {
        createTaskList(props.taskList, props.setTaskList, values.listname)
        navigate('/')
    }


    return (
        <div className='py-40'>
            <h1 className='text-center  font-poppins text-5xl text-cWhite'>New Task List</h1>


            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField
                        control={form.control}
                        name="listname"
                        render={({ field }) => (
                            <FormItem className='my-2 max-w-[400px] ml-[90px] mt-4'>
                                <FormLabel className='font-poppins text-cWhite text-base pl-2'>List Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="New List" className='text-center text-lg' {...field} />
                                </FormControl>
                                <FormMessage className='text-center' />
                            </FormItem>
                        )}
                    />
                    <div className='pl-[200px] mt-4'>
                        <Button type="submit" className='m-2 w-40'>Done</Button>
                    </div>
                </form>
            </Form>


        </div>
    )
}
