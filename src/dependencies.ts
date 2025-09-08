import { InMemTaskRepo } from "./adapters/taskRepo/inMemTaskRepo";
import { TaskRepository } from "./core/models";


type Dependencies = {
    taskRepo: TaskRepository;
};


export function getDependencies(): Dependencies {
    return {
        taskRepo: new InMemTaskRepo(),
    };
}
