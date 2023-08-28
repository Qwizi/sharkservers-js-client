/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_GQQ } from './Ban_GQQ';
import type { Role_WAF } from './Role_WAF';

export type UserOutWithEmail = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_WAF>;
    display_role?: Role_WAF;
    last_login?: string;
    last_online?: string;
    banned_user?: Array<Ban_GQQ>;
    banned_by?: Array<Ban_GQQ>;
};

