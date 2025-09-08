import { getTasks } from "@/core/usecase";

export async function GET(r: Request) {
    console.debug('GET tasks', JSON.stringify(r));
    const tasks = await getTasks();
    return Response.json({ tasks });
}

