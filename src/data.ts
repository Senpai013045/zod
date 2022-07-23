import z from "zod";

const UserSchema = z.object({
    name:z.string(),
    age:z.string(),
    city:z.string()
})

export type User = z.infer<typeof UserSchema>;

const ApiResponseSchema = z.array(UserSchema);

export const getData =async () => {
    const response = await fetch("http://localhost:8080");
    if (!response.ok){
        throw new Error(response.statusText)
    }
    const data = await response.json();
    const parsed = ApiResponseSchema.safeParse(data)
    if(parsed.success){
        return parsed.data
    }
    console.error(parsed.error)
    throw new Error("Api response invalid")
}
