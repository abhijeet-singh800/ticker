import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { setSettings, getSetting } from '@src/utils/local'
import FormPanel from './FormPanel'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@src/shadcn/components/ui/form"
import { Input } from "@src/shadcn/components/ui/input"
import '@src/main.css'
import { useNavigate } from 'react-router-dom'
import { setIsFirst } from '@src/utils/local'
import { TaskListObj, TaskObj } from '@src/utils/data'

const formSchema = z.object({
  first: z.string().min(1, {
    message: "Please Enter your First Name",
  }),
  last: z.string().min(1, {
    message: "Please Enter you Last Name",
  }),
  nick: z.string()
})

type FormFields = z.infer<typeof formSchema>


export default function NameForm(props: { onboard: string, setOriginal: (obj: TaskObj[]) => void, setTaskList: (obj: TaskListObj[]) => void }) {

  const default_values = getSetting()
  const navigate = useNavigate()

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first: String(default_values.first_name),
      last: String(default_values.last_name),
      nick: String(default_values.nick_name)
    },
  })

  function onSubmit(values: FormFields) {
    const data: {
      "first_name": string,
      "last_name": string,
      "nick_name": string
    } = {
      "first_name": values.first,
      "last_name": values.last,
      "nick_name": values.nick
    }
    setSettings(data)
    if (props.onboard == 'true') {
      setIsFirst(false)
      navigate('/list')
    } else {
      navigate('/')
    }

  }

  const onboard: string = props.onboard

  return (
    <div className={onboard == 'true' ? 'px-20' : 'p-3'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem className='my-2'>
                <FormLabel className='font-poppins text-cWhite text-base pl-2'>First Name</FormLabel>
                <FormControl>
                  <Input data-cy="nameForm-firstName" placeholder="John" className='text-center text-lg' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem className='my-2'>
                <FormLabel className='font-poppins text-cWhite m-1 text-base pl-2'>Last Name</FormLabel>
                <FormControl>
                  <Input data-cy="nameForm-lastName" placeholder="Doe" className='text-center text-lg' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="nick"
            render={({ field }) => (
              <FormItem className='my-2'>
                <FormLabel className='font-poppins text-cWhite m-1 text-base pl-2'>Nick Name</FormLabel>
                <FormControl>
                  <Input data-cy="nameForm-nickName" placeholder="Joe" className='text-center text-lg' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormPanel onboard={onboard} setOriginal={props.setOriginal} setTaskList={props.setTaskList} />

        </form>
      </Form>
    </div>
  )
}
