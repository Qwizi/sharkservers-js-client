/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_ZZL } from './Ban_ZZL';
import type { Chat_YET } from './Chat_YET';
import type { Role_QWO } from './Role_QWO';

export type User_URI = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_QWO>;
    display_role?: Role_QWO;
    last_login?: string;
    last_online?: string;
    secret_salt: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    banned_user?: Array<Ban_ZZL>;
    banned_by?: Array<Ban_ZZL>;
    chats?: Array<Chat_YET>;
};

