/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_BUX } from './Player_BUX';
import type { Role_SKK } from './Role_SKK';

export type User_UPR = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_SKK;
    last_login?: string;
    last_online?: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    player?: Player_BUX;
};

