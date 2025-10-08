"use server"

import { getDependencies } from "@/dependencies";
import { Task } from "./models";

export async function getTasks(): Promise<Task[] | undefined> {
    const d = getDependencies();
    return await d.taskRepo.getTasks();
}
