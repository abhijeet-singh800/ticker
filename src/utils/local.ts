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
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['taskList'], result => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve(result.taskList)
            }
        })
    })
}

export function setTaskList(target: TaskListObj[]) {
    const data: string = JSON.stringify(target)
    return new Promise<void>((resolve, reject) => {
        chrome.storage.local.set({ 'taskList': data }, () => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve()
            }
        })
    })
}


// Task Local Function 
export function getTask() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['task'], result => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve(result.task)
            }
        })
    })
}

export function setTask(target: TaskObj[]) {
    const data: string = JSON.stringify(target)
    return new Promise<void>((resolve, reject) => {
        chrome.storage.local.set({ 'task': data }, () => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve()
            }
        })
    })
}

// Settings Local Function 
export function getSetting() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['settings'], result => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve(result.settings)
            }
        })
    })
}

export function setSettings(target: Settings[]) {
    const data: string = JSON.stringify(target)
    return new Promise<void>((resolve, reject) => {
        chrome.storage.local.set({ 'settings': data }, () => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve()
            }
        })
    })
}


// ifFirst Local Function 
export function getIsFirst() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['isFirst'], result => {
            if (chrome.runtime.lastError) {
                reject("hello")
            } else {
                resolve(result.isFirst)
            }
        })
    })
}

export function setIsFirst(target: boolean) {
    const data: string = JSON.stringify(target)
    return new Promise<void>((resolve, reject) => {
        chrome.storage.local.set({ 'isFirst': data }, () => {
            if (chrome.runtime.lastError) {
                reject()
            } else {
                resolve()
            }
        })
    })
}