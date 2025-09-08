import { getTasks } from "./usecase"

describe("getTasks", () => {

    test("should return tasks", async () => {
        const result = await getTasks();
        expect(result?.length).toBeGreaterThan(1);
    });
});


