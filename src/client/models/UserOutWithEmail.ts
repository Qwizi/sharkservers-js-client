/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_RDA } from './Ban_RDA';
import type { Chat_QDM } from './Chat_QDM';
import type { Role_YMM } from './Role_YMM';

export type UserOutWithEmail = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_YMM>;
    display_role?: Role_YMM;
    last_login?: string;
    last_online?: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    banned_user?: Array<Ban_RDA>;
    banned_by?: Array<Ban_RDA>;
    chats?: Array<Chat_QDM>;
};

