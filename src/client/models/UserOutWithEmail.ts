/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_LVV } from './Ban_LVV';
import type { Chat_LJP } from './Chat_LJP';
import type { Player_BUX } from './Player_BUX';
import type { Role_VUH } from './Role_VUH';

export type UserOutWithEmail = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_VUH>;
    display_role?: Role_VUH;
    last_login?: string;
    last_online?: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    player?: Player_BUX;
    banned_user?: Array<Ban_LVV>;
    banned_by?: Array<Ban_LVV>;
    chats?: Array<Chat_LJP>;
};

