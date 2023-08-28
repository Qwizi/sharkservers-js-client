/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_GQQ } from './Ban_GQQ';
import type { Player_AHX } from './Player_AHX';

export type User_YNQ = {
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
    banned_user?: Array<Ban_GQQ>;
    banned_by?: Array<Ban_GQQ>;
    players?: Array<Player_AHX>;
};

