import { v4 as uuidv4 } from 'uuid'


type TaskListObj = {
    id: string;
    title: string;
}

type TaskObj = {
    title: string,
    notes: string | null,
    id: string,
    listId: string,
    stared: boolean,
    completed: boolean
}

// Utilities Functions fot Task

export function createTask(target: TaskObj[], set: (a: TaskObj[]) => void, title: string, notes: string | null, listId: string): void {
    const data: TaskObj[] = target
    const element: TaskObj = { title: title, notes: notes, id: uuidv4(), listId: listId, stared: false, completed: false }
    data.unshift(element)
    set(data)
}

export function taskObject(target: TaskObj[], id: string): TaskListObj {
    const element: TaskObj = target.filter(obj => obj.id == id)[0]
    return element
}

export function updatedTask(target: TaskObj[], set: (a: TaskObj[]) => void, id: string, property: string, value: string): void {
    const data: TaskObj[] = target
    const index: number = data.findIndex(obj => obj.id === id)
    const element: TaskObj = data[index]
    property == 'title' && (element.title = value)
    property == 'notes' && (element.notes = value)
    property == 'listId' && (element.listId = value)
    if (property == 'stared') {
        if (value == 'true') {
            element.stared = true
        } else if (value == 'false') {
            element.stared = false
        } else {
            console.log('Invalid Value')
        }
    }
    if (property == 'completed') {
        if (value == 'true') {
            element.completed = true
        } else if (value == 'false') {
            element.completed = false
        } else {
            console.log('Invalid Value')
        }
    }
    set(data)
}

export function deleteTask(target: TaskObj[], set: (a: TaskObj[]) => void, array: string[]): void {
    const data: TaskObj[] = target
    array.forEach((id: string) => {
        const index: number = data.findIndex((obj: TaskObj) => obj.id == id)
        if (index !== -1) {
            target.splice(index, 1)
        }
    })
    set(data)
}



// Utilities Functions for TaskList 

export function createTaskList(target: TaskListObj[], set: (a: TaskListObj[]) => void, title: string): void {
    const data: TaskListObj[] = target
    data.push({
        id: uuidv4(),
        title: title
    })
    set(data)
}

export function taskListObject(target: TaskListObj[], id: string): TaskListObj {
    const element: TaskListObj = target.filter(obj => obj.id == id)[0]
    return element
}

export function updateTaskList(target: TaskListObj[], set: (a: TaskListObj[]) => void, id: string, title: string): void {
    const data: TaskListObj[] = target
    const index: number = data.findIndex(obj => obj.id === id)
    const element: TaskListObj = data[index]
    element.title = title
    set(data)
}

export function deleteTaskList(target: TaskListObj[], setTaskList: (a: TaskListObj[]) => void, tasks: TaskObj[], setTask: (a: TaskObj[]) => void, id: string): void {
    const data: TaskListObj[] = target
    const index: number = data.findIndex((obj: TaskListObj) => obj.id == id)
    if (index !== -1) {
        const task_list: string[] = []
        tasks.forEach((obj: TaskObj) => {
            if (obj.listId == id) {
                task_list.push(obj.id)
            }
        })
        data.splice(index, 1)
        setTaskList(data)
        deleteTask(tasks, setTask, task_list)
    }
}

