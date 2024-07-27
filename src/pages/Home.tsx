import { Navigate } from 'react-router-dom'
import { IsFirst } from '@src/utils/local'
import Greet from '@src/components/Greet'
import Calender from '@src/components/Calender'
import HomePanel from '@src/components/HomePanel'
import Cards from '@src/components/Card'
import { TaskObj, TaskListObj } from '@src/utils/data'
import '@src/main.css'


export function Home(props: { original: TaskObj[], setOriginal: (obj: TaskObj[]) => void, Array: TaskObj[], setFilter: (value: string) => void, setList: (value: string) => void, taskList: TaskListObj[] }) {

  if (IsFirst()) {
    return (<Navigate to="/onboard" />)
  }

  return (
    <div>
      <Greet />
      <div className="flex mt-8">
        <div className='w-2/3'>
          <HomePanel setFilter={props.setFilter} setList={props.setList} taskList={props.taskList} />
        </div>
        <div className='w-1/3' >
          <Calender />
        </div>
      </div>
      <div className='mt-8'>
        <Cards Array={props.Array} original={props.original} set={props.setOriginal} />

      </div>
    </div>
  )
}

