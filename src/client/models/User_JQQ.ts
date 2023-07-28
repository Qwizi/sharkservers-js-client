/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_XMV } from './Ban_XMV';
import type { Role_SHU } from './Role_SHU';

export type User_JQQ = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_SHU>;
    display_role?: Role_SHU;
    last_online?: string;
    banned_user?: Array<Ban_XMV>;
    banned_by?: Array<Ban_XMV>;
};

