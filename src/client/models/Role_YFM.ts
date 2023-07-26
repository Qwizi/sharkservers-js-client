/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope_YLI } from './Scope_YLI';
import type { User_KYE } from './User_KYE';

export type Role_YFM = {
    id?: number;
    name: string;
    color?: string;
    scopes?: Array<Scope_YLI>;
    is_staff?: boolean;
    user_roles?: Array<User_KYE>;
    user_display_role?: Array<User_KYE>;
};

