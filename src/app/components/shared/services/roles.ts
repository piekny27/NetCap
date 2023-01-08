import { User } from "@firebase/auth";

export interface Roles { 
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
    ad?: User
}