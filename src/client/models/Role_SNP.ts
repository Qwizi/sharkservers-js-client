/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope_IJL } from './Scope_IJL';
import type { User_CEN } from './User_CEN';

export type Role_SNP = {
    id?: number;
    name: string;
    color?: string;
    scopes?: Array<Scope_IJL>;
    is_staff?: boolean;
    user_roles?: Array<User_CEN>;
    user_display_role?: Array<User_CEN>;
};

