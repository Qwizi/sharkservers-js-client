/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_JVD } from './Player_JVD';
import type { Role_HFV } from './Role_HFV';

export type User_AKB = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_HFV;
    last_online?: string;
    threads_count?: number;
    posts_count?: number;
    likes_count?: number;
    players?: Array<Player_JVD>;
};

