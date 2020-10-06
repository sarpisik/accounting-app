import { Base } from "../shared";

export interface UserDocument extends User {
    _id: string;
}

export interface User extends Base {
    name: string;
    email: string;
    authorize: "READ" | "READ_WRITE" | "ADMIN";
}
