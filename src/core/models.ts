

export type Task = {
    checked: boolean;
    txt: string;
};



export interface TaskRepository {
    getTasks(): Promise<Task[]>;
};

