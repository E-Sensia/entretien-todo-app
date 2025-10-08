import { Task, TaskRepository } from "@/core/models";

var tasks: Task[] = [
    { checked: true, txt: "Display a list of all task in the state" },
    { checked: false, txt: "Display a checkbox to mark the task" },
    { checked: false, txt: "Display an input and a button to add a task" },
]

export class InMemTaskRepo implements TaskRepository {
    async getTasks(): Promise<Task[]> {
        return tasks;
    };
};
