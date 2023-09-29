/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_RDA } from './Ban_RDA';
import type { Chat_QDM } from './Chat_QDM';

export type User_GHG = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    last_login?: string;
    last_online?: string;
    secret_salt: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    banned_user?: Array<Ban_RDA>;
    banned_by?: Array<Ban_RDA>;
    chats?: Array<Chat_QDM>;
};

