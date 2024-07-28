import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@src/pages/Home'
import Onboard from '@src/pages/Onboard'
import Settings from '@src/pages/Settings'
import Task from '@src/pages/Task'
import NotFound from '@src/pages/NotFound'
import New from '@src/pages/New'
import NewTaskList from '@src/pages/NewTaskList';
import { TaskObj } from '@src/utils/data'
import { IsFirst, setTaskLocal, getTask, setSettings, getTaskList, setTaskListLocal } from '@src/utils/local'
import './App.css'

if (IsFirst()) {
    setTaskListLocal([])
    setTaskLocal([])
    setSettings({ "first_name": "", "last_name": "", "nick_name": "" })
}

export default function Test() {

    const local = getTask()
    const taskListLocal = getTaskList()
    const [original, setOriginal] = React.useState(local)
    const [Array, setArray] = React.useState(local)
    const [taskList, setTaskList] = React.useState(taskListLocal)
    const [filter_value, setFilter] = React.useState('all')
    const [list_value, setList] = React.useState('all')

    function filterit() {
        if (filter_value == 'all' && list_value == 'all') {
            return (original)
        } else if (filter_value == 'all' && list_value != 'all') {
            return (original.filter((obj: TaskObj) => obj.listId == list_value))
        } else if (filter_value == 'star' && list_value == 'all') {
            return (original.filter((obj: TaskObj) => obj.stared == true))
        } else if (filter_value == 'comp' && list_value == 'all') {
            return (original.filter((obj: TaskObj) => obj.completed == true))
        } else if (filter_value == 'star' && list_value != 'all') {
            return (original.filter((obj: TaskObj) => obj.stared == true).filter((obj: TaskObj) => obj.listId == list_value))
        } else if (filter_value == 'comp' && list_value != 'all') {
            return (original.filter((obj: TaskObj) => obj.completed == true).filter((obj: TaskObj) => obj.listId == list_value))
        }
    }

    React.useEffect(() => {
        setTaskLocal(original)
        setTaskListLocal(taskList)
        setArray(original)
        setArray(filterit())
    }, [original, taskList])

    React.useEffect(() => {
        setArray(filterit())
    }, [filter_value, list_value])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home original={original} setOriginal={setOriginal} Array={Array} setFilter={setFilter} setList={setList} taskList={taskList} />} />
                    <Route path='index.html' element={<Home original={original} setOriginal={setOriginal} Array={Array} setFilter={setFilter} setList={setList} taskList={taskList} />} />
                    <Route path='onboard' element={<Onboard setTaskList={setTaskList} setOriginal={setOriginal} />} />
                    <Route path='settings' element={<Settings setTaskList={setTaskList} setOriginal={setOriginal} />} />
                    <Route path='list' element={<NewTaskList taskList={taskList} setTaskList={setTaskList} />} />
                    <Route path='task/:taskId' element={<Task original={original} setOriginal={setOriginal} />} />
                    <Route path='new/' element={<New original={original} setOriginal={setOriginal} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}