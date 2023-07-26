/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_LNO } from './Ban_LNO';
import type { Role_RKG } from './Role_RKG';

export type User_MST = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    email: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_RKG>;
    display_role?: Role_RKG;
    last_login?: string;
    last_online?: string;
    banned_user?: Array<Ban_LNO>;
    banned_by?: Array<Ban_LNO>;
};

