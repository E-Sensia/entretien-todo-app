import { Task, TaskRepository } from "@/core/models";


export class InMemTaskRepo implements TaskRepository {
    private tasks: Task[] = [];

    constructor() {
        this.tasks = [
            { checked: true, txt: "Display a list of all task in the state" },
            { checked: false, txt: "Display a checkbox to mark the task" },
            { checked: false, txt: "Display an input and a button to add a task" },
        ];
    }

    async getTasks(): Promise<Task[]> {
        return this.tasks;
    };
};
