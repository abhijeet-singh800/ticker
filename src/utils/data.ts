export type TaskListObj = {
    "id": string,
    "title": string
}

export type TaskObj = {
    "title": string,
    "notes": string | null,
    "id": string,
    "listId": string,
    "stared": boolean,
    "completed": boolean
}

export type Settings = {
    "first_name": string,
    "last_name": string,
    "nick_name": string
}