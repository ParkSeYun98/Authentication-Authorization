import { HttpJson } from "./common/Http";
import { ReturnType } from "../type/ReturnType";

const testApi = async(
    success: (data: { data: string }) => void,
    fail: (error: unknown) => void
) => {
    await HttpJson.get(`/api/member/test`).then(success).catch(fail);
}

export { testApi }