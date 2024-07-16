/*
This File Contins dummy data for Testing Purposes 
This is Modeled after Googles Tasks API so that it will become easier to intigrate into the Project Laster Down the Road 
 */

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

export const taskList: TaskListObj[] = [
    {
        "id": "1",
        "title": "Real-Time"
    },
    {
        "id": "2",
        "title": "Later"
    }
]

export const task: TaskObj[] = [
    {
        "title": "Test Task 1",
        "notes": "Notes of the Test Task \n Second Line of the Notes",
        "id": "1",
        "listId": "2",
        "stared": true,
        "completed": false
    },
    {
        "title": "Test Task 2",
        "notes": null,
        "id": "2",
        "listId": "1",
        "stared": false,
        "completed": false
    },
    {
        "title": "Test Task 3",
        "notes": "Notes of the Test Task \n Second Line of the Notes",
        "id": "3",
        "listId": "2",
        "stared": false,
        "completed": false
    },
    {
        "title": "Test Task 4",
        "notes": null,
        "id": "4",
        "listId": "1",
        "stared": true,
        "completed": false
    },
    {
        "title": "Test Task 5",
        "notes": "Notes of the Test Task \n Second Line of the Notes",
        "id": "5",
        "listId": "1",
        "stared": false,
        "completed": true
    },
    {
        "title": "Test Task 6",
        "notes": null,
        "id": "6",
        "listId": "1",
        "stared": true,
        "completed": true
    },
    {
        "title": "Test Task 7",
        "notes": "Notes of the Test Task \n Second Line of the Notes",
        "id": "7",
        "listId": "2",
        "stared": false,
        "completed": false
    },
    {
        "title": "Test Task 8",
        "notes": null,
        "id": "8",
        "listId": "1",
        "stared": true,
        "completed": true
    }
]



export const settings: Settings = {
    "first_name": "Abhijeet",
    "last_name": "Singh",
    "nick_name": "Abhi"
}

export const isFirst: boolean = false