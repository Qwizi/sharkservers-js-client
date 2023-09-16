/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_LBS } from './Ban_LBS';
import type { Role_MHE } from './Role_MHE';

export type User_YMC = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_MHE>;
    display_role?: Role_MHE;
    last_login?: string;
    last_online?: string;
    secret_salt: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    banned_user?: Array<Ban_LBS>;
    banned_by?: Array<Ban_LBS>;
};

