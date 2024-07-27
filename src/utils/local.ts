type TaskListObj = {
    "id": string,
    "title": string
}

type TaskObj = {
    "title": string,
    "notes": string | null,
    "id": string,
    "listId": string,
    "stared": boolean,
    "completed": boolean
}

type Settings = {
    "first_name": string,
    "last_name": string,
    "nick_name": string
}

//  Task List Local Functions 
export function getTaskList() {
    const data = window.localStorage.getItem('taskList')
    if (data !== null) {
        return JSON.parse(data)
    }
}

export function setTaskListLocal(target: TaskListObj[]) {
    const data: string = JSON.stringify(target)
    window.localStorage.setItem('taskList', data)
}


// Task Local Function 
export function getTask() {
    const data = window.localStorage.getItem('task')
    if (data !== null) {
        return JSON.parse(data)
    }
}

export function setTaskLocal(target: TaskObj[]) {
    const data: string = JSON.stringify(target)
    window.localStorage.setItem('task', data)
}

// Settings Local Function 
export function getSetting() {
    const data = window.localStorage.getItem('settings')
    if (data !== null) {
        return JSON.parse(data)
    }
}

export function setSettings(target: Settings) {
    const data: string = JSON.stringify(target)
    window.localStorage.setItem('settings', data)
}


// ifFirst Local Function 
export function IsFirst() {
    if (window.localStorage.getItem('isFirst') == null) {
        return true
    } else {
        return false
    }
}

export function setIsFirst(target: boolean) {
    const data: string = JSON.stringify(target)
    window.localStorage.setItem('isFirst', data)
}