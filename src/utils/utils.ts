import { v4 as uuidv4 } from 'uuid'


type TaskListObj = {
    id: string;
    title: string;
}

type Task = {
    title: string,
    notes: string | null,
    id: string,
    listId: string,
    stared: boolean,
    completed: boolean
}[]

type TaskObj = {
    title: string,
    notes: string | null,
    id: string,
    listId: string,
    stared: boolean,
    completed: boolean
}

// Utilities Functions fot Task

export function createTask(target: TaskObj[], title: string, notes: string | null, listId: string): void {
    const element: TaskObj = { title: title, notes: notes, id: uuidv4(), listId: listId, stared: false, completed: false }
    target.unshift(element)
}

export function taskObject(target: TaskObj[], id: string): TaskListObj {
    const element: TaskObj = target.filter(obj => obj.id == id)[0]
    return element
}

export function updatedTask(target: TaskObj[], id: string, property: string, value: string): void {
    const element: TaskObj = target.filter(obj => obj.id == id)[0]
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
}

export function deleteTask(target: TaskObj[], array: string[]): void {
    array.forEach((id: string) => {
        const index: number = target.findIndex((obj: TaskObj) => obj.id == id)
        if (index !== -1) {
            target.splice(index, 1)
        }
    })
}



// Utilities Functions for TaskList 

export function createTaskList(target: TaskListObj[], title: string): void {
    target.push({
        id: uuidv4(),
        title: title
    })
}

export function taskListObject(target: TaskListObj[], id: string): TaskListObj {
    const element: TaskListObj = target.filter(obj => obj.id == id)[0]
    return element
}

export function updateTaskList(target: TaskListObj[], id: string, title: string): void {
    const element: TaskListObj = target.filter(obj => obj.id == id)[0]
    element.title = title
}

export function deleteTaskList(target: TaskListObj[], tasks: TaskObj[], id: string): void {
    const index: number = target.findIndex((obj: TaskListObj) => obj.id == id)
    if (index !== -1) {
        const task_list: string[] = []
        tasks.forEach((obj: TaskObj) => {
            if (obj.listId == id) {
                task_list.push(obj.id)
            }
        })
        target.splice(index, 1)
        deleteTask(tasks, task_list)
    }
}

