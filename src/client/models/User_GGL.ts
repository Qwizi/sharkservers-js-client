/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_JYC } from './Ban_JYC';
import type { Player_KMO } from './Player_KMO';

export type User_GGL = {
    created_date?: string;
    updated_date?: string;
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
    banned_user?: Array<Ban_JYC>;
    banned_by?: Array<Ban_JYC>;
    players?: Array<Player_KMO>;
};

