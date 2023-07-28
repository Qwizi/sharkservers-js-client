/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope_IBE } from './Scope_IBE';
import type { User_GGL } from './User_GGL';

export type Role_PJU = {
    id?: number;
    name: string;
    color?: string;
    scopes?: Array<Scope_IBE>;
    is_staff?: boolean;
    user_roles?: Array<User_GGL>;
    user_display_role?: Array<User_GGL>;
};

